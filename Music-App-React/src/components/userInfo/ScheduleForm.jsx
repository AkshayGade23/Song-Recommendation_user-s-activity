import React, { useState, useEffect } from 'react'
import DateMomentUtils from '@date-io/moment';
import {
    TimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { FetchingData } from './FetchingData';
import FetchingDataFromNode from '../suggestedPlaylist/FetchingDataFromNode';



 


 function ScheduleForm() {

    // const [activityName, setActivityName] = useState("");
    // const [startTime, setStartTime] = useState(new Date());
    // const [endTime, setEndTime] = useState(new Date());

    const [userData, setUserData] = useState({
        activityName: "",
        startTime: new Date(),
        endTime: new Date(),
    })


   

    const [message, setmessage] = useState({});

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        console.log(name, value)
        setUserData({ ...userData, [name]: value });
    };

    

  
    const submitData = async (event) => {
        event.preventDefault();
        const { activityName, startTime, endTime } = userData;
        
        if(activityName.length>0 ){
        const res = await fetch(
            'https://react-music-app-b49e4-default-rtdb.firebaseio.com/userDataRecords.json',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    activityName,
                    startTime,
                    endTime,
                })
            }

        );
        fetch("http://localhost:8000/message")
            .then((res) => res.json())
            .then((jsonData) => {
                setmessage(jsonData);
            })


        // <ScheduleForm onSubmit={this.fetchData} />
        if (res) {
            setUserData({
                activityName: "",
                startTime: new Date(),
                endTime: new Date(),
            })
            alert("Data Stored");
        } else {
            alert("Please fill the data");
            console.log("Please Fill the data");
        }
    }
    else{
        alert("Please fill the data");
    }

    }


    return (
        <div className="scheduleForm px-4 my-32 w-auto mx-auto space-y-6 font-serif">

            <form onSubmit={submitData} className="px-4 my-32 max-w-3xl mx-auto space-y-6" method='POST'>
                <h1 className='text-3xl font-semibold'>User Schedule:</h1>
                <div className='ActivityName '>
                    <label>
                        Activity Name:
                        <input
                            className='activity border border-gray-400 py-2 px-4 w-full block rounded focus:outline-none focus:border-teal-500'
                            type="text"
                            name='activityName'
                            value={userData.activityName}
                            onChange={postUserData}
                        />
                    </label>
                </div>
                <div className='StartTime'>
                    <label>
                        Start Time:
                        <div className='border border-gray-400 w-1/3 py-2 px-4 block rounded focus:outline-none focus:border-teal-500'>
                            <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                <TimePicker value={userData.startTime} onChange={date => { setUserData({ ...userData, startTime: date }) }} name='startTime' />
                            </MuiPickersUtilsProvider>
                        </div>
                    </label>
                </div>
                <div className='EndTime mt-5'>
                    <label>
                        <div>
                            End Time:
                        </div>
                        <div className='border border-gray-400 w-1/3 py-2 px-4 block rounded focus:outline-none focus:border-teal-500'>
                            <MuiPickersUtilsProvider utils={DateMomentUtils}>
                                <TimePicker value={userData.endTime} onChange={date => { setUserData({ ...userData, endTime: date }) }} name='endTime' />
                            </MuiPickersUtilsProvider>
                        </div>
                    </label>
                </div>
                <div className='Submit mt-5 items-center justify-between'>
                    <button type="submit" className='bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={submitData}>Submit</button>
                </div>
            </form>

            <h1 className='text-3xl font-semibold ml-3'>Your Activites:</h1>
            <FetchingData />
            <div>
                <div>
                    <h1 className='text-3xl font-semibold mt-20 ml-3'>
                        Customised Playlist For You:
                    </h1>
                </div>
                {
                message != null ?
                    <FetchingDataFromNode data={message} />
                    :
                    <FetchingDataFromNode />
                }
                {/* <FetchingDataFromNode data={message} /> */}
            </div>
        </div>
    )
}

export default ScheduleForm
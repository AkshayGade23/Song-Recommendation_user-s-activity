import StartFirebase from '../../firebase-config'
import React from 'react'
import { ref, onValue, child } from 'firebase/database'
import { Table } from 'react-bootstrap'

const db = StartFirebase();

export class FetchingData extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        const dbRef = ref(db, 'userDataRecords');

        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach((childSnapshot) => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            })
            this.setState({ tableData: records });
        });
    }

    render() {
        return (
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <Table className='w-full text-sm text-left text-white dark:text-white'>
                    <thead className='text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'>
                        <tr>
                            <th scope="col" class="px-6 py-3">#</th>
                            <th scope="col" class="px-6 py-3">Activity Name</th>
                            <th scope="col" class="px-6 py-3">Start Time</th>
                            <th scope="col" class="px-6 py-3">End Time</th>
                        </tr>
                    </thead>


                    <tbody>
                        {this.state.tableData.map((rowD, index) => {
                            return (

                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4">{index+1}</td>
                                    <td class="px-6 py-4">{rowD.data.activityName}</td>
                                    <td class="px-6 py-4">{rowD.data.startTime}</td>
                                    <td class="px-6 py-4">{rowD.data.endTime}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
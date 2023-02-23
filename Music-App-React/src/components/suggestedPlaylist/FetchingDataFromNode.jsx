import { async } from '@firebase/util'
import React, { useState, useEffect } from 'react'
import Tables from './Tables'


export default class FetchingDataFromNode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props.data,
        }
        console.log(props)
    }


    componentDidMount() {
        fetch("http://localhost:8000/message")
            .then((res) => res.json())
            .then((jsonData) => {
                console.log('Did Mount')
                console.log(this.state.message)
                console.log('Global Map')
                this.setState({message:jsonData})
            })
    }

    render() {
        return (
            <div>
                {
                    <Tables data={this.state.message} />
                }
            </div>

        )
    }

}




// function FetchingDataFromNode(props) {

//     const [message, setMessage] = useState({});

//     useEffect(() => {
//         fetch('http://localhost:8000/message')
//             .then((res) => res.json())
//             .then((jsonData) => {
//                 setMessage(jsonData);
//                 console.log(jsonData['Football']);
//             });
//     }, {});

//     return (
//         <div>
//             {
//                 this.props.data == null ?
//                     <Tables data={message} />
//                     :
//                     <Tables data={props.data} />
//             }
//         </div>
//     )
// }

// export default FetchingDataFromNode


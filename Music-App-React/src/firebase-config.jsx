// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyDPeQIgwgcknPR1zeT70tNDQgHHJtBF8mw",
        authDomain: "react-music-app-b49e4.firebaseapp.com",
        databaseURL: "https://react-music-app-b49e4-default-rtdb.firebaseio.com",
        projectId: "react-music-app-b49e4",
        storageBucket: "react-music-app-b49e4.appspot.com",
        messagingSenderId: "175060290755",
        appId: "1:175060290755:web:4cd39a715f969e6603e676",
        measurementId: "G-SY1JE85BZD"
    };
    
    const app = initializeApp(firebaseConfig);

    return getDatabase(app);

}

export default StartFirebase;

// const firebaseConfig = {
//     apiKey: "AIzaSyDPeQIgwgcknPR1zeT70tNDQgHHJtBF8mw",
//     authDomain: "react-music-app-b49e4.firebaseapp.com",
//     databaseURL: "https://react-music-app-b49e4-default-rtdb.firebaseio.com",
//     projectId: "react-music-app-b49e4",
//     storageBucket: "react-music-app-b49e4.appspot.com",
//     messagingSenderId: "175060290755",
//     appId: "1:175060290755:web:4cd39a715f969e6603e676",
//     measurementId: "G-SY1JE85BZD"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const db = getFirestore(app);

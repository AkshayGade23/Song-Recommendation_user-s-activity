import './App.css';
import Download from './components/Download';
import Experience from './components/Experience';
import Footer from './components/Footer';
import  Header  from "./components/Header";
import Hero from './components/Hero';
import ScheduleForm from './components/userInfo/ScheduleForm';
import Search from './components/Search';
import { FetchingData } from './components/userInfo/FetchingData';
import DisplayPlaylistTable from './components/suggestedPlaylist/DisplayPlaylistTable';
import FetchingDataFromNode from './components/suggestedPlaylist/FetchingDataFromNode';




function App() {

  return (
    <div className="App overflow-hidden bg-orange-100" >
      
      {/* <DisplayPlaylistTable /> */}
      {/* <FetchingDataFromNode /> */}
      <ScheduleForm  />
      {/* <FetchingData /> */}
      {/* <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer /> */}
    </div>
  );
}

export default App;

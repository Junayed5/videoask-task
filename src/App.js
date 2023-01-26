import './App.css';
import Sidebar2 from './component/sidebar2';
import SideForm from './component/sideForm';
import Video from './component/Video';
import Video2 from './component/Video2';

function App() {
  return (
    <div className='grid grid-cols-2 '>
      <Video/>
      <SideForm/>
      <Video2/>
      <Sidebar2/>
    </div>
  );
}

export default App;

import './App.css';
import SideForm from './component/sideForm';
import Video from './component/Video';

function App() {
  return (
    <div className='grid grid-cols-2 '>
      <Video/>
      <SideForm/>
    </div>
  );
}

export default App;

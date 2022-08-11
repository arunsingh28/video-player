import videoSample from './videos/sample.mp4'
import './App.css';
import './player.css'
import { Player } from 'video-react';

function App() {

  return (
    <div className="App">
      <Player>
        <source src={videoSample} />
      </Player>
    </div>
  )
}

export default App;

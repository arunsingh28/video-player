import videoSample from './videos/sample.mp4'
import './App.css';
import { useRef } from 'react'

function App() {
  const video = useRef()

  let playStatus = false

  const handlePlay = () => {
    console.log(playStatus)
    if (playStatus) {
      video.current.play()
      playStatus = false
    } else {
      video.current.pause()
      playStatus = true
    }
  }

  return (
    <div className="App">
      <video src={videoSample} id="video" ref={video}></video>
      <button onClick={handlePlay}>{playStatus ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default App;

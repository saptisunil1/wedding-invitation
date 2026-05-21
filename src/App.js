// import { useRef, useState } from 'react';
import Start from './component/startPage';
// import MusicIcon from './component/musicIcon';

function App() {
  // const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const toggleMusic = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //     setIsPlaying(false);
  //   } else {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   }
  // };

  return (
    <>
      {/* <audio ref={audioRef} loop>
        <source src="" type="audio/mp3" />
      </audio>

      <MusicIcon isPlaying={isPlaying} toggleMusic={toggleMusic} /> */}
      <Start></Start>
    </>
  );
}

export default App;

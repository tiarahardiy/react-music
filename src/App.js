import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "CANDY",
      artist: "NCT DREAM",
      img_src: "./images/candy.webp",
      src: "./music/candy.mp3",
    },
    {
      title: "BEATBOX",
      artist: "NCT DREAM",
      img_src: "./images/beatbox.webp",
      src: "./music/beatbox.mp3",
    },
    {
      title: "GLITCH MODE",
      artist: "NCT DREAM",
      img_src: "./images/glimo.webp",
      src: "./music/glimo.mp3",
    },
    {
      title: "Hello Future",
      artist: "NCT DREAM",
      img_src: "./images/helfut.jpg",
      src: "./music/helfut.mp3",
    },
    {
      title: "Ridin'",
      artist: "NCT DREAM",
      img_src: "./images/ridin.jpg",
      src: "./music/ridin.mp3",
    },
    {
      title: "HOT SAUCE",
      artist: "NCT DREAM",
      img_src: "./images/hotsauce.jpg",
      src: "./music/hotsauce.mp3",
    },
    {
      title: "DEJAVU",
      artist: "NCT DREAM",
      img_src: "./images/dejavu.jpg",
      src: "./music/dejavu.mp3",
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div>
      <div className="App">
        <h2 className="dream">DREAM</h2>
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
        <h2 className="music">MUSIC</h2>
      </div>
    </div>
  );
}

export default App;

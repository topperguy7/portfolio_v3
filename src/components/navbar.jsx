import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaMoon , FaSun } from 'react-icons/fa'
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa'
import 'devicon/devicon.min.css';
import cover from '../assets/cover.jpg'
import song1 from '../assets/musix/shop-toby-fox.mp3'
import song2 from '../assets/musix/wet-hands-C418.mp3'

function Navbar() {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect( ()=> {
    if(dark){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark(prev => {const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    })
  }

  const songs = [
    { title: "Shop", artist: "Toby FOx", src: song1 },
    { title: "Wet Hands", artist: "C418", src: song2 }
  ]

  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const nextSong = () => {
    const next = (currentSong + 1) % songs.length
    setCurrentSong(next)
    setIsPlaying(true)
    setTimeout(() => audioRef.current.play(), 0)
  }

  const prevSong = () => {
    const prev = (currentSong - 1 + songs.length) % songs.length
    setCurrentSong(prev)
    setIsPlaying(true)
    setTimeout(() => audioRef.current.play(), 0)
  }

  return (
    <>
      <div className="navbar">

        <div className="top">
          <a href="#navbar">Parth</a>
        </div>

        <div className="med">
          <a href="#projects">Projects</a>
          <a href="#">Experience</a>
        </div>

        <div className="bot">
          <a className='icon' href="https://github.com/topperguy7" target='_blank' rel='noopener noreferrer'><FaGithub/></a>
          <a className='icon' href="https://linkedin.com/in/parthhonrao" target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
          <a href="mailto:parthhonrao24@gmail.com" target='_blank' rel='noopener noreferrer' className='last-a'>Connect</a>
          <button onClick={toggleTheme}
            className='cursor-pointer'>
            {dark ? <FaSun color="yellow"/>: <FaMoon color="blue"/>}
          </button>
        </div>
      </div>

      <div className='player'>

        <div className='p-image'>
          <img src={cover} alt="cover" />
        </div>

        <div className='info'>
          <h3>{songs[currentSong].title}</h3>
          <p>{songs[currentSong].artist}</p>
        </div>

        <div className='controls'>
          <button className='controls-btn' onClick={prevSong}><FaStepBackward/></button>
          <button className='controls-btn' onClick={togglePlay}>
            {isPlaying ? <FaPause/> : <FaPlay/>}
          </button>
          <button className='controls-btn' onClick={nextSong}><FaStepForward/></button>
        </div>

        <audio
          ref={audioRef}
          src={songs[currentSong].src}
          onEnded={nextSong}
        />
      </div>
    </>
  );
}

export default Navbar;
import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  const[loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : ( <>
              <Navbar/>
              <Hero/>
              <Projects/>
              <Experience/>
            </>)}
    </>
  );
}

export default App

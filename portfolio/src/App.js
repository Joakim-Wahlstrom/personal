import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './views/About/About';

function App() {
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = () => {
    // console.log(window.scrollY)
    if(window.scrollY > 600) {
      setHasScrolled(true)
    } else if(window.scrollY <= 600) {
      setHasScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="App">
      <div aria-hidden="true" className="fixed-bg"></div>
      <Navbar hasScrolled={hasScrolled} />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

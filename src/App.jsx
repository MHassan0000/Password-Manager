import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'

function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/');

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.replace('#', '') || '/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '/about':
        return <About />
      case '/services':
        return <Services />
      case '/':
      default:
        return <Manager />
    }
  }

  return (
    <>
      <Navbar/>
      {renderPage()}
      <Footer/>
    </>
  )
}

export default App

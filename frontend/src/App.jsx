import './App.css'
import Landing from './components/Landing.jsx'
import Sponsor from './components/Sponsors/Sponsor.jsx'
import Navbar from './utils/Navbar.jsx'
import Footer from './utils/Footer.jsx'
import About from './components/About/About.jsx'
import Sigs from './components/Book/Sigs.jsx'
import Schedule from './components/Schedule/Schedule.jsx'
import FAQs from './components/FAQs/FAQs.jsx'

function App() {

  return (
    <div >
      <div>
        <Navbar></Navbar>
      </div>
      <div id="Landing">
        <Landing></Landing>
        <Sponsor></Sponsor>
      </div>
      <div id="About">
        <About></About>
      </div>
      <div id="SIGs">
        <Sigs></Sigs>
      </div>
      <div id="Schedule">
        <Schedule></Schedule>
      </div>
      <div id="FAQs">
        <FAQs></FAQs>
      </div>
      <div id="Contact">
        <Footer/>
      </div>
    </div>
  )
}

export default App

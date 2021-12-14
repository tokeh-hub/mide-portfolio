import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import { Portfolio } from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
       <Navbar />
       <div className='content'>
       <Welcome/>
       <About/>
       <Skills/>
       <Portfolio/>
       <Contact/>
       </div>
    </div>
  );
}

export default App;

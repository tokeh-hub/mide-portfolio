import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import { Portfolio } from './components/Portfolio';
import Contact from './components/Contact';
import { useGlobalContext } from './context';
function App() {
  const{light} = useGlobalContext()
  return (
    <div className={light?'light-bg':'dark-bg'}>
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

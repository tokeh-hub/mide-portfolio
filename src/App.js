import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skills';
import { Portfolio } from './components/Portfolio';
import Contact from './components/Contact';
import { useGlobalContext } from './context';
import "animate.css/animate.min.css";
function App() {
  const { light } = useGlobalContext()
  return (
    <div className={light ? 'light-bg' : 'dark-bg'}>
      <Navbar />
      <Welcome />
      <About />
      <Skills />
      <Portfolio />
      <Contact />

    </div>
  );
}

export default App;

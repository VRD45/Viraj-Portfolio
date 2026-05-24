import './App.css';
import { About } from './Component/About';
import { Contact } from './Component/Contact';
import { Experience } from './Component/Experience';
import { Home } from './Component/Home';
import { Navbar } from './Component/Navbar';
import { Projects } from './Component/Projects';
import { Skills } from './Component/Skills';
import { Tile } from './Component/Tile';

function App() {
  const handleNavigate = (e, id) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    // Scroll smoothly
    element.scrollIntoView({ behavior: 'smooth' });
    // Update URL hash without jumping
    window.history.pushState(null, null, `#${id}`);
  }
}
  return (
    <div className="App">
     <Home handleNavigate={handleNavigate}/>
     <About />
     <Experience />
     <Skills />
     <Projects />
     <Contact />
     <Tile handleNavigate={handleNavigate} />
     <Navbar handleNavigate={handleNavigate} />
    </div>
  );
}

export default App;

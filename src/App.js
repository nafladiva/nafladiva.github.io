import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './components/Navbar';
import HeadSection from './components/HeadSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeadSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './ui/components/Navbar';
import HeadSection from './ui/sections/HeadSection';
import AboutSection from './ui/sections/AboutSection';
import ProjectSection from './ui/sections/ProjectSection';
import ContactSection from './ui/sections/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeadSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;

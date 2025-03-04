import { useState } from 'react';
import { 
  FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython, FaBars, FaTimes, 
  FaRocket, FaJs, FaPhp, FaHtml5, FaCss3Alt, FaAws 
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import photo from "./img/photo.jpg";
import Contact from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    /* Fondo principal: pastel suave y texto oscuro */
    <div className="min-h-screen bg-[#E6F8F8] text-[#333]">
      {/* Navbar */}
      <nav className="fixed w-full bg-[#E6F8F8]/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold">
              <FaRocket className="inline-block mr-2" />
              May<span className="text-[#68A3A8]">Space</span>
            </a>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('projects')} className="hover:text-[#68A3A8] transition-colors duration-300">Projects</button>
              <button onClick={() => scrollToSection('work')} className="hover:text-[#68A3A8] transition-colors duration-300">Work</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#68A3A8] transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-[#68A3A8] transition-colors duration-300">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#68A3A8] transition-colors duration-300">Contact</button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 px-4 hover:bg-[#68A3A8]/20">Projects</button>
              <button onClick={() => scrollToSection('work')} className="block w-full text-left py-2 px-4 hover:bg-[#68A3A8]/20">Work</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 px-4 hover:bg-[#68A3A8]/20">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 px-4 hover:bg-[#68A3A8]/20">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-4 hover:bg-[#68A3A8]/20">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 bg-gradient-to-b from-[#E6F8F8] to-white min-h-screen flex items-center relative overflow-hidden">
        {/* Imagen de fondo con baja opacidad */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-20"></div>
        
        {/* Efecto de estrellas (mantiene las clases y animaciones) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 text-6xl">🚀</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Space Developer
              <span className="block text-2xl md:text-3xl mt-4 font-normal text-[#68A3A8]">
                Launching Digital Experiences into the Cosmos
              </span>
            </h1>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700">
              Welcome to my digital universe, where code meets cosmic creativity.
              Let's explore the infinite possibilities together.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => scrollToSection('work')}
                className="px-8 py-3 bg-[#68A3A8] text-[#E6F8F8] font-semibold rounded-full hover:bg-[#9cd1d4] hover:text-[#333] transition-colors duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-transparent border-2 border-[#68A3A8] text-[#68A3A8] font-semibold rounded-full hover:bg-[#68A3A8] hover:text-[#E6F8F8] transition-colors duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Recently Created Websites */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 relative text-[#000]">Recently Created Websites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-[#E6F8F8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#68A3A8]/20"
              >
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#68A3A8]">Project {item}</h3>
                  <p className="text-gray-600">A stellar website that showcases the beauty of the cosmos.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Work */}
      <section id="work" className="py-16 bg-[#E6F8F8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 relative text-[#000]">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="bg-white rounded-lg p-6 border border-[#68A3A8]/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#68A3A8]">Project Title {item}</h3>
                <p className="text-gray-600 mb-4">
                  Description of the amazing project and its impact on the digital universe.
                </p>
                <a href="#" className="text-[#68A3A8] hover:text-[#9cd1d4] transition-colors">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 relative text-[#000]">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="shrink-0 md:w-1/3">
              <img 
                src={photo}
                alt="Mery"
                className="w-64 h-64 rounded-full object-cover border-2 border-[#9cd1d4] shadow-lg"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-gray-700 mb-6">
                Like a comet traversing the digital galaxy, I explore new technologies and create stellar web experiences.
                With each project, I bring the cosmic wonders into the digital realm. Passionate about technology, with 
                experience in web development, cloud computing, and cibersecurity. Skilled in creating functional and 
                visually appealing solutions using various programming languages. Certified in cloud services including 
                AWS, Azure, and Microsoft, with expertise in responsive design, API integration, and CMS customization. 
                Demonstrated ability to solve problems, optimize resources, and collaborate effectively in agile environments.
              </p>
              
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="text-[#68A3A8] hover:text-[#9cd1d4] text-2xl">
                  <FaGithub />
                </a>
                <a href="#" className="text-[#68A3A8] hover:text-[#9cd1d4] text-2xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-[#E6F8F8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 relative text-[#000]">Technologies I Command</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <FaJs className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">JavaScript</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <FaReact className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">React</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <SiTypescript className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">TypeScript</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <FaNodeJs className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">Node.js</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <FaPhp className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">PHP</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <SiMysql className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">MySQL</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <SiMongodb className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">MongoDB</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <SiTailwindcss className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">Tailwind CSS</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <FaPython className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">Python</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <VscAzure className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">Microsoft Azure</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <FaAws className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">AWS</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <FaHtml5 className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">HTML5</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#68A3A8]/20">
              <FaCss3Alt className="text-4xl text-[#68A3A8] mb-4 mx-auto" />
              <h3 className="font-bold">CSS3</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <div>
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-[#68A3A8] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Mery Vega M. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            <a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mx-3 hover:text-[#333]"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mx-3 hover:text-[#333]"
            >
              GitHub
            </a>
            <a href="mailto:meryvegam16@gmail.com" className="mx-3 hover:text-[#333]">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython, FaBars, FaTimes, FaRocket, FaJs, FaPhp, FaHtml5, FaCss3Alt, FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiMicrosoftazure } from 'react-icons/si';

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
    <div className="min-h-screen bg-space text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-space/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold">
              <FaRocket className="inline-block mr-2" />
              Space<span className="text-star">Dev</span>
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
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
              <button onClick={() => scrollToSection('work')} className="nav-link">Work</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 px-4 hover:bg-star/20">Projects</button>
              <button onClick={() => scrollToSection('work')} className="block w-full text-left py-2 px-4 hover:bg-star/20">Work</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 px-4 hover:bg-star/20">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 px-4 hover:bg-star/20">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-4 hover:bg-star/20">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-16 bg-gradient-to-b from-space to-cosmos min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-20"></div>
        
        {/* Star particles effect */}
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
              <span className="block text-2xl md:text-3xl mt-4 font-normal text-star">
                Launching Digital Experiences into the Cosmos
              </span>
            </h1>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
              Welcome to my digital universe, where code meets cosmic creativity.
              Let's explore the infinite possibilities together.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => scrollToSection('work')}
                className="px-8 py-3 bg-star text-space font-semibold rounded-full hover:bg-nebula hover:text-white transition-colors duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-transparent border-2 border-star text-star font-semibold rounded-full hover:bg-star hover:text-space transition-colors duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Recently Created Websites */}
      <section id="projects" className="py-16 bg-cosmos">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Recently Created Websites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-space rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-star/20">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-star">Project {item}</h3>
                  <p className="text-gray-400">A stellar website that showcases the beauty of the cosmos.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Work */}
      <section id="work" className="py-16 bg-space">
        <div className="container mx-auto px-4">
          <h2 className="section-title">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-cosmos rounded-lg p-6 border border-star/20">
                <h3 className="text-2xl font-bold mb-4 text-star">Project Title {item}</h3>
                <p className="text-gray-400 mb-4">Description of the amazing project and its impact on the digital universe.</p>
                <a href="#" className="text-star hover:text-nebula transition-colors">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 bg-cosmos">
        <div className="container mx-auto px-4">
          <h2 className="section-title">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Like a comet traversing the digital galaxy, I explore new technologies and create stellar web experiences.
              With each project, I bring the cosmic wonders into the digital realm.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-star hover:text-nebula text-2xl"><FaGithub /></a>
              <a href="#" className="text-star hover:text-nebula text-2xl"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-space">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Technologies I Command</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="tech-card">
              <FaJs className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">JavaScript</h3>
            </div>
            <div className="tech-card">
              <FaReact className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">React</h3>
            </div>
            <div className="tech-card">
              <SiTypescript className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">TypeScript</h3>
            </div>
            <div className="tech-card">
              <FaNodeJs className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">Node.js</h3>
            </div>
            <div className="tech-card">
              <FaPhp className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">PHP</h3>
            </div>
            <div className="tech-card">
              <SiMysql className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">MySQL</h3>
            </div>
            <div className="tech-card">
              <SiMongodb className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">MongoDB</h3>
            </div>
            <div className="tech-card">
              <SiTailwindcss className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">Tailwind CSS</h3>
            </div>
            <div className="tech-card">
              <FaPython className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">Python</h3>
            </div>
            <div className="tech-card">
              <SiMicrosoftazure className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">Microsoft Azure</h3>
            </div>
            <div className="tech-card">
              <FaAws className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">AWS</h3>
            </div>
            <div className="tech-card">
              <FaHtml5 className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">HTML5</h3>
            </div>
            <div className="tech-card">
              <FaCss3Alt className="text-4xl text-star mb-4 mx-auto" />
              <h3 className="font-bold">CSS3</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-cosmos">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Wanna talk?</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input type="text" id="name" className="input-style" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your email*</label>
                <input type="email" id="email" required className="input-style" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message*</label>
                <textarea id="message" required rows={4} className="input-style"></textarea>
              </div>
              <button type="submit" className="bg-star text-space px-8 py-3 rounded-md hover:bg-nebula hover:text-white transition-colors w-full">
                Launch Message 🚀
              </button>
            </form>
            <p className="mt-6 text-gray-400 text-center">
              Contact me with any questions or just to say a few nice words ... or mean ones. Up to you .... free will and all
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/Cooespatrans-IMG.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Mensaje enviado! Pronto me pondré en contacto contigo.')
    setFormData({ name: '', email: '', message: '' })
  }

  const technologies = [
    {
      category: 'Frontend',
      icon: '💻',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB']
    },
    {
      category: 'Mobile',
      icon: '📱',
      skills: ['Flutter', 'React Native']
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-ramd">RAMD</span>
            <span className="logo-dot">.</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              Sobre mí
            </button>
            <button onClick={() => scrollToSection('tech')} className={activeSection === 'tech' ? 'active' : ''}>
              Stack
            </button>
            <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
              Proyectos
            </button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-label">Desarrollador Full Stack</div>
              <h1 className="hero-title">
                <span className="name-line">Ricardo Andrés</span>
                <span className="name-line">Melo Delgado</span>
              </h1>
              <div className="hero-ramd">
                <span className="ramd-letter">R</span>
                <span className="ramd-letter">A</span>
                <span className="ramd-letter">M</span>
                <span className="ramd-letter">D</span>
              </div>
              <p className="hero-subtitle">
                Transformando ideas en soluciones digitales innovadoras
              </p>
              <div className="hero-cta">
                <button onClick={() => scrollToSection('projects')} className="btn-primary">
                  Ver proyectos
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                  Contactar
                </button>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="visual-container">
                <div className="code-block">
                  <div className="code-header">
                    <span className="code-dot"></span>
                    <span className="code-dot"></span>
                    <span className="code-dot"></span>
                  </div>
                  <div className="code-content">
                    <pre>
{`const developer = {
  name: "Ricardo Melo",
  role: "Full Stack Dev",
  company: "RAMD",
  skills: [
    "React",
    "Node.js", 
    "MongoDB",
    "Flutter"
  ],
  passion: "Innovation"
};`}
                    </pre>
                  </div>
                </div>
                <div className="geometric-shape shape-1"></div>
                <div className="geometric-shape shape-2"></div>
                <div className="geometric-shape shape-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="section-label">01 / Sobre mí</div>
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Construyendo el futuro digital</h2>
              <div className="about-description">
                <p>
                  Soy estudiante de noveno semestre de Ingeniería de Sistemas con una pasión 
                  por crear soluciones tecnológicas que generen un impacto real. Mi enfoque se 
                  centra en el desarrollo full stack, donde combino creatividad con código para 
                  construir experiencias digitales excepcionales.
                </p>
                <p>
                  Con experiencia en el desarrollo de plataformas web y aplicaciones móviles, 
                  he trabajado en proyectos que van desde sistemas de rastreo vehicular hasta 
                  soluciones empresariales complejas. Mi objetivo es establecer <strong>RAMD</strong>, 
                  mi propia empresa de desarrollo, donde pueda llevar ideas innovadoras al 
                  siguiente nivel.
                </p>
                <p>
                  Creo firmemente en el aprendizaje continuo y en mantenerme actualizado con 
                  las últimas tecnologías. Cada proyecto es una oportunidad para crecer, innovar 
                  y crear algo memorable.
                </p>
              </div>
              <a 
                href="https://github.com/ricardo-34" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
              >
                <span>Ver mi GitHub</span>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">9°</div>
                <div className="stat-label">Semestre Ing. Sistemas</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Años de experiencia</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Full Stack</div>
                <div className="stat-label">Especialización</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="tech">
        <div className="section-container">
          <div className="section-label">02 / Stack Tecnológico</div>
          <h2 className="section-title">Herramientas que uso</h2>
          
          <div className="tech-wrapper">
            {technologies.map((category, index) => (
              <div key={index} className="tech-section" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="tech-category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-name">{category.category}</h3>
                </div>
                <div className="tech-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="tech-badge"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="tech-footer">
            <p>Y siempre aprendiendo nuevas tecnologías...</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-container">
          <div className="section-label">03 / Proyectos destacados</div>
          <h2 className="section-title">Trabajos</h2>
          
          <div className="project-featured">
            <div className="project-image">
              
              <img src={logo} alt="Cooespatrans" />
             
            </div>
            <div className="project-content">
              <div className="project-tag">Proyecto destacado</div>
              <h3 className="project-title">Cooespatrans</h3>
              <div className="project-description">
                <p>
                  Plataforma web completa para el rastreo de flotas vehiculares en tiempo real, 
                  desarrollada con tecnologías modernas. Incluye una aplicación móvil conectada 
                  que permite a los conductores y administradores gestionar y monitorear vehículos 
                  de manera eficiente.
                </p>
                <p>
                  El sistema integra geolocalización, notificaciones en tiempo real, reportes 
                  detallados y un panel de administración completo para la gestión de flotas.
                </p>
              </div>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Vite</span>
              </div>
              <a 
                href="https://cooespatrans.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Ver proyecto en vivo
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="more-projects">
            <p className="more-text">Más proyectos próximamente...</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <div className="section-label">04 / Contacto</div>
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Trabajemos juntos</h2>
              <p className="contact-text">
                ¿Tienes un proyecto en mente? ¿Quieres colaborar o simplemente charlar sobre 
                tecnología? Estoy siempre abierto a nuevas oportunidades y conversaciones 
                interesantes.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-value">melodelgado16@gmail.com</div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <a 
                    href="https://github.com/ricardo-34" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-value contact-link"
                  >
                    github.com/ricardo-34
                  </a>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button type="submit" className="btn-submit">
                Enviar mensaje
                <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="logo-ramd">RAMD</span>
            <span className="logo-dot">.</span>
          </div>
          <div className="footer-text">
            Diseñado y desarrollado por Ricardo Andrés Melo Delgado
          </div>
          <div className="footer-year">© 2025</div>
        </div>
      </footer>
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'
import logo from './assets/Cooespatrans-IMG.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: '', type: '' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Número de WhatsApp (actualiza con tu número real)
  const whatsappNumber = '573157279812' // Formato: código país + número sin espacios
  const whatsappMessage = encodeURIComponent('Hola Ricardo, vi tu portafolio y me gustaría conversar sobre un proyecto.')

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

  const openWhatsApp = (customMessage = null) => {
    const message = customMessage ? encodeURIComponent(customMessage) : whatsappMessage
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' })
    }, 5000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const serviceId = 'service_unhxct9'
    const templateId = 'template_lf1rib8'
    const publicKey = 'IvEIUT_u55qzfpMfL'
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Ricardo Melo'
    }
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email enviado exitosamente!', response.status, response.text)
        showNotification('¡Mensaje enviado exitosamente! Pronto me pondré en contacto contigo.', 'success')
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        console.error('Error al enviar el email:', error)
        showNotification('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.', 'error')
      })
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
      {/* Notification Toast */}
      {notification.show && (
        <div className={`notification notification-${notification.type}`}>
          <div className="notification-content">
            <span className="notification-icon">
              {notification.type === 'success' ? '✓' : '✕'}
            </span>
            <span className="notification-message">{notification.message}</span>
          </div>
          <button 
            className="notification-close" 
            onClick={() => setNotification({ show: false, message: '', type: '' })}
          >
            ×
          </button>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <button 
        className="whatsapp-float" 
        onClick={() => openWhatsApp()}
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.736 5.48 2.022 7.784L0 32l8.448-2.016A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.605 0-5.056-.748-7.13-2.035l-.511-.304-5.298 1.264 1.296-4.905-.334-.53A13.26 13.26 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
          <path d="M23.547 19.574c-.405-.202-2.394-1.181-2.765-1.316-.371-.135-.64-.202-.91.202-.27.405-1.045 1.316-1.281 1.586-.236.27-.472.304-.877.101-.405-.202-1.712-.631-3.26-2.011-1.206-1.075-2.02-2.401-2.256-2.806-.236-.405-.025-.624.177-.826.182-.182.405-.472.607-.708.202-.236.27-.405.405-.675.135-.27.067-.506-.034-.708-.101-.202-.91-2.192-1.247-3.001-.329-.788-.662-.681-.91-.694-.236-.012-.506-.015-.776-.015s-.708.101-1.079.506c-.371.405-1.416 1.384-1.416 3.374s1.449 3.913 1.651 4.183c.202.27 2.847 4.347 6.898 6.094.963.416 1.716.664 2.302.85.968.307 1.849.264 2.546.16.777-.116 2.394-.979 2.731-1.924.337-.945.337-1.755.236-1.924-.101-.169-.371-.27-.776-.472z"/>
        </svg>
        <span className="whatsapp-text">WhatsApp</span>
      </button>

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
            <button onClick={() => openWhatsApp()} className="btn-nav-contact">
              💬 Contactar
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

      {/* Value Proposition Section - NUEVO */}
      <section className="value-proposition">
        <div className="section-container">
          <div className="value-content">
            <div className="value-badge">
              <span className="badge-icon">🚀</span>
              <span className="badge-text">Lo que ofrezco</span>
            </div>
            <h2 className="value-title">
              Desarrollo páginas web profesionales para negocios
            </h2>
            <p className="value-description">
              Soluciones completas que incluyen <strong>dominio personalizado</strong>, 
              <strong> hosting en VPS</strong> optimizado y <strong>WhatsApp integrado</strong> 
              para que tus clientes te contacten fácilmente. Todo listo para que tu negocio 
              tenga presencia digital profesional desde el día uno.
            </p>
            <div className="value-features">
              <div className="feature-item">
                <div className="feature-icon">🌐</div>
                <div className="feature-content">
                  <h3>Sitios Web Completos</h3>
                  <p>Desde landing pages hasta plataformas empresariales</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h3>Rápido y Optimizado</h3>
                  <p>Carga veloz en móvil y desktop para mejor experiencia</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💬</div>
                <div className="feature-content">
                  <h3>WhatsApp Integrado</h3>
                  <p>Tus clientes te contactan con un solo clic</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <div className="feature-content">
                  <h3>Soporte Continuo</h3>
                  <p>Mantenimiento y actualizaciones incluidas</p>
                </div>
              </div>
            </div>
            <button onClick={() => openWhatsApp('Hola Ricardo, quiero saber más sobre tus servicios de desarrollo web.')} className="btn-value-cta">
              📞 Hablemos de tu proyecto
              <span className="arrow">→</span>
            </button>
          </div>
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
                  centra en desarrollar productos digitales que no solo funcionen bien, sino que 
                  también ofrezcan experiencias excepcionales. A lo largo de mi carrera, 
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
              <div className="project-actions">
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
          </div>

          <div className="more-projects">
            <p className="more-text">¿Tienes un proyecto en mente?</p>
            <button onClick={() => openWhatsApp()} className="btn-more-projects">
              Conversemos sobre tu idea
              <span className="arrow">→</span>
            </button>
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
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <button 
                    onClick={() => openWhatsApp()}
                    className="contact-value contact-link contact-whatsapp-btn"
                  >
                    WhatsApp directo
                  </button>
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
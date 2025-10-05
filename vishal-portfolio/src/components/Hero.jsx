import { Container, Button, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <div className="hero-content">
          {/* Profile Image */}
          <div className="hero-image-wrapper" data-aos="zoom-in">
            <div className="hero-image-container">
              <img 
                src="/profile.jpg" 
                alt="Vishal Gupta img" 
                className="hero-image"
              />
              <div className="hero-image-border"></div>
            </div>
          </div>

          {/* Content */}
          <h1 className="hero-title">Vishal Gupta</h1>
          <h2 className="hero-subtitle">Software Developer | Full Stack Developer</h2>
          <p className="hero-description">
            Master of Computer Application | CDAC DAC Certified | Pune, Maharashtra
          </p>
          
          <div className="hero-buttons">
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              <Button className="btn-hero btn-hero-primary">
                Get In Touch
              </Button>
            </Link>
            <Link to="projects" smooth={true} offset={-70} duration={500}>
              <Button className="btn-hero btn-hero-outline">
                View Projects
              </Button>
            </Link>
            <a href="/resume.pdf" download className="btn-download-wrapper">
              <Button className="btn-hero btn-hero-download">
                <FaDownload /> Resume
              </Button>
            </a>
          </div>

          <div className="social-links">
            <a href="mailto:vishalgupta22598@gmail.com" className="social-link" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+919140693698" className="social-link" aria-label="Phone">
              <FaPhone />
            </a>
            <a href="https://linkedin.com/in/vishalgupta1998" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/vishalgupta1998" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
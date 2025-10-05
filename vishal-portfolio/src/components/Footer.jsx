import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <div className="footer-content">
                <h3 className="footer-brand">Vishal Gupta</h3>
                <p className="footer-description">
                  Software Developer passionate about creating elegant solutions to complex problems.
                  Specialized in Full Stack Development with expertise in Java, React, and modern web technologies.
                </p>
                
                <div className="footer-social">
                  <a 
                    href="mailto:vishalgupta22598@gmail.com" 
                    className="footer-social-link" 
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a 
                    href="https://linkedin.com/in/vishalgupta1998" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-social-link" 
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://github.com/vishalgupta1998" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="footer-social-link" 
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="footer-bottom">
                <p>
                  © {new Date().getFullYear()} Vishal Gupta. All Rights Reserved. 
                  Made with <FaHeart className="footer-heart" /> and React
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {showScroll && (
        <button 
          className="scroll-top" 
          onClick={scrollTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

export default Footer
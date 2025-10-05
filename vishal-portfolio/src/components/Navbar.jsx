import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'education', label: 'Education' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'achievements', label: 'Achievements' },
    { to: 'contact', label: 'Contact' },
  ]

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          VG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                {link.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
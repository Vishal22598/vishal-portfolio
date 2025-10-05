import { Container } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'vishalgupta22598@gmail.com',
      displayValue: 'vishalgupta22598@gmail.com',
      link: 'mailto:vishalgupta22598@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9140693698',
      displayValue: '+91 9140693698',
      link: 'tel:+919140693698'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      displayValue: 'Pune, Maharashtra, India',
      link: null
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'vishalgupta1998',
      displayValue: 'vishalgupta1998',
      link: 'https://linkedin.com/in/vishalgupta1998'
    }
  ]

  return (
    <section id="contact" className="section-dark">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss opportunities</p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="contact-item" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="contact-icon">
                {info.icon}
              </div>
              <div className="contact-details">
                <h6>{info.title}</h6>
                {info.link ? (
                  <a 
                    href={info.link} 
                    target={info.link.startsWith('http') ? '_blank' : '_self'} 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {info.displayValue}
                  </a>
                ) : (
                  <p className="contact-text">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Contact
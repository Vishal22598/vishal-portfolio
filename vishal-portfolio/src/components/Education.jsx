import { Container, Row, Col } from 'react-bootstrap'
import { FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
  const educationData = [
    {
      degree: 'Diploma in Advanced Computing (DAC)',
      institution: 'Centre for Development of Advanced Computing (C-DAC), Pune',
      duration: 'Feb 2025 – Aug 2025',
      percentage: '75%',
      isOngoing: true
    },
    {
      degree: 'Master of Computer Application',
      institution: 'Rajarshi School of Management and Technology, Varanasi, Uttar Pradesh',
      duration: 'July 2022 – Aug 2024',
      percentage: '68%',
      isOngoing: false
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Maharaja Balwant Singh P.G. College, Varanasi, Uttar Pradesh',
      duration: 'July 2017 – Aug 2020',
      percentage: '68%',
      isOngoing: false
    },
    {
      degree: 'XII (Science)',
      institution: 'Kisan Inter College Mirzamurad, Varanasi, Uttar Pradesh',
      duration: '2017',
      percentage: '68%',
      isOngoing: false
    },
    {
      degree: 'X (General)',
      institution: 'Kachhawa Christian School, Kachhawa Mirzapur, Uttar Pradesh',
      duration: '2015',
      percentage: '72%',
      isOngoing: false
    }
  ]

  return (
    <section id="education" className="section-dark">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Education</h2>
          <p>My Academic Journey</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="education-timeline">
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className="education-item" 
                  data-aos="fade-right" 
                  data-aos-delay={index * 100}
                >
                  <div className="education-card">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-duration">
                      <FaCalendarAlt /> {edu.duration}
                    </p>
                    <span className="education-percentage">
                      {edu.isOngoing ? '🎓 ' + edu.percentage : '📊 ' + edu.percentage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Education
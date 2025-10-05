import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <section id="about" className="section-light">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>About Me</h2>
          <p>Get to know more about my background and objectives</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="about-card" data-aos="fade-up" data-aos-delay="100">
              <h3 className="mb-4 text-center">Career Objective</h3>
              <div className="highlight-box">
                <p className="objective-text">
                  Motivated and detail-oriented Computer Science graduate recently completed the CDAC DAC course from
                  Sunbeam Institute of Information Technology, Pune. Skilled in <strong>Java</strong>, <strong>Web Technologies</strong>, 
                  <strong> Databases</strong>, and <strong>Software Development Lifecycle</strong>. Seeking an entry-level position 
                  as a <strong>Software Developer/Full Stack Developer</strong> where I can apply my technical skills and contribute 
                  to organizational success.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
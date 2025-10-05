import { Container } from 'react-bootstrap'
import { FaTrophy, FaCertificate, FaCode } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      icon: <FaCertificate />,
      title: 'CDAC Certification',
      description: 'Successfully completed CDAC PGDAC with a focus on Full Stack Development, demonstrating proficiency in modern web technologies and software development practices.',
      score: '75% Score'
    },
    {
      icon: <FaCode />,
      title: 'Coding Challenges',
      description: 'Actively participated in various coding challenges and hackathons during CDAC training, enhancing problem-solving skills and collaborative development.',
      score: 'Multiple Events'
    },
    {
      icon: <FaTrophy />,
      title: 'Academic Excellence',
      description: 'Maintained consistent academic performance throughout educational journey, from school to post-graduation, showing dedication and commitment to learning.',
      score: 'Top Performer'
    }
  ]

  return (
    <section id="achievements" className="section-light">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Achievements</h2>
          <p>Milestones & Recognition</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="achievement-card" 
              data-aos="flip-up" 
              data-aos-delay={index * 100}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <h4 className="achievement-title">{achievement.title}</h4>
              <p className="achievement-description">{achievement.description}</p>
              <span className="achievement-score">{achievement.score}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Achievements
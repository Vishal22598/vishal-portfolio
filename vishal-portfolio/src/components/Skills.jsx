import { Container } from 'react-bootstrap'
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <FaCode />,
      skills: ['Java', 'C', 'C++', 'C#', 'JavaScript']
    },
    {
      category: 'Web Technologies',
      icon: <FaLaptopCode />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap']
    },
    {
      category: 'Backend & Middleware',
      icon: <FaServer />,
      skills: ['Node.js', 'Servlet', 'JSP', 'Spring Boot', 'Hibernate']
    },
    {
      category: 'Databases',
      icon: <FaDatabase />,
      skills: ['MySQL', 'JDBC']
    },
    {
      category: 'Frameworks & Tools',
      icon: <FaTools />,
      skills: ['REST APIs', 'Git/GitHub', 'Maven', 'Eclipse', 'VS Code', 'Postman', 'Swagger']
    },
    {
      category: 'Cloud & DevOps',
      icon: <FaCloud />,
      skills: ['AWS (Basics)', 'CI/CD', 'Windows', 'Linux', 'DSA', 'OOPs']
    }
  ]

  return (
    <section id="skills" className="section-light">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Technical Skills</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="skill-category-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="skill-category-header">
                <div className="skill-icon">{category.icon}</div>
                <h5 className="skill-category-title">{category.category}</h5>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
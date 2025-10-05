import { Container } from 'react-bootstrap'

const Projects = () => {
  const projectsData = [
    {
      title: 'GreenNest',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
      description: 'GreenNest is a comprehensive e-commerce platform for buying plants, seeds, and gardening tools. The website features a user-friendly interface, mobile-responsive design, and allows users to browse, search, and filter products effortlessly.',
      features: [
        'Product browsing with advanced search and filters',
        'Order placement, tracking, and cancellation',
        'Mobile-responsive design for seamless experience',
        'Plant installation and care packages',
        'Educational blogs and gardening tutorials'
      ]
    },
    {
      title: 'Restaurant Management System',
      technologies: ['Java', 'MySQL', 'HTML5', 'Bootstrap', 'JavaScript'],
      description: 'A full-featured restaurant management solution that streamlines customer interactions, menu management, ordering processes, and billing operations with an intuitive interface.',
      features: [
        'Customer registration and authentication',
        'Dynamic menu display with real-time pricing',
        'Online food ordering system',
        'Automated bill generation',
        'Customer feedback and rating system'
      ]
    },
    {
      title: 'Employee Data Management',
      technologies: ['HTML', 'CSS', 'Java', 'Servlet', 'JDBC', 'MySQL'],
      description: 'A robust web application built with Java servlets and JDBC for efficient employee data management. Features complete CRUD operations with a clean, user-friendly interface.',
      features: [
        'Employee record storage and retrieval',
        'Full CRUD operations (Create, Read, Update, Delete)',
        'JDBC database integration',
        'Responsive HTML interface',
        'Secure data handling'
      ]
    }
  ]

  return (
    <section id="projects" className="section-dark">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Academic & CDAC Projects Portfolio</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
            >
              <div className="project-header">
                <span className="project-number">0{index + 1}</span>
                <h4 className="project-title">{project.title}</h4>
              </div>
              <div className="project-body">
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  <h6>✨ Key Features:</h6>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Projects
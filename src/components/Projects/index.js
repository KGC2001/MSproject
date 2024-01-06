// Projects.js

import {useState} from 'react'

const Projects = () => {
  const [projectTitle, setProjectTitle] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projects, setProjects] = useState([])

  const addProject = () => {
    if (projectTitle && projectDescription) {
      const newProject = {title: projectTitle, description: projectDescription}
      setProjects([...projects, newProject])
      setProjectTitle('')
      setProjectDescription('')
    }
  }

  return (
    <section id="projects" className="abo">
      <h2 style={{color: 'brown'}}>Projects</h2>

      {/* Form to add projects */}
      <form
        onSubmit={e => {
          e.preventDefault()
          addProject()
        }}
      >
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={e => setProjectTitle(e.target.value)}
          className="te"
        />
        <textarea
          placeholder="Project Description"
          value={projectDescription}
          onChange={e => setProjectDescription(e.target.value)}
          className="te"
        />
        <button type="submit" className="probut">
          Add Project
        </button>
      </form>

      {/* Display added projects */}
      <div className="project-list">
        {projects.map(project => (
          <div className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

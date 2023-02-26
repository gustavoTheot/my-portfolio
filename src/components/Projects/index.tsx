import {
  InformProject,
  LinksProject,
  MyProjects,
  Project,
  ProjectsContainer,
} from './styled'
import { projects } from '../../utils/data'

export function Projects() {
  const listProjects = projects.map((projects) => projects)
  console.log(listProjects)

  return (
    <ProjectsContainer id="projects">
      <MyProjects>
        <h1>Portifoil</h1>

        <ul>
          {listProjects.map((project) => {
            return (
              <li key={project.id}>
                <img
                  src="https://lh3.googleusercontent.com/Z7l0JfqTeeK41_DGK7cRnkmagm_brdcAWCEmpXuGj_rUmOVr9vyuuoIaJtXngW1nZVg0bWjYlmGQPQsE11Og_nMH=w640-h400-e365-rj-sc0x00ffffff"
                  alt=""
                />

                <Project>
                  <InformProject>
                    <h3>{project.name}</h3>
                    <p>
                      <strong>Ferramentas: </strong>
                      {project.tecnology.map((tec) => tec)}
                    </p>
                  </InformProject>

                  <LinksProject>
                    <a href={project.linkCode}>Code</a>
                    <a href={project.application}>Aplication</a>
                  </LinksProject>
                </Project>
              </li>
            )
          })}
        </ul>
      </MyProjects>
    </ProjectsContainer>
  )
}

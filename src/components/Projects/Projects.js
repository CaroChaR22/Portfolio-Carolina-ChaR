import React from "react";
import * as S from "./Projects.styles";
import { projectsPortfolio } from "./ProjectsData";
import github from "../../svg/github.svg";
import website from "../../svg/website.svg";

console.log(projectsPortfolio);
function Projects() {
  return (
    <S.ContainerProject id="my-projects">
      <S.Title>
        some of{" "}
        <span>
          {" "}
          <br /> My Projects
        </span>
      </S.Title>

      <S.ContProject>
        {projectsPortfolio.map((project, index) => (
        <S.projectConten_2 key={index}>
          <S.titleProject>{project.title} </S.titleProject>

          <S.contImage>
            <img src={project.image} alt={project.title} loazy="true"/> 
          </S.contImage>

          <S.contTech>
            {project.techs.map((tech, index) => (
              <div key={index}>
                <img src={tech.src} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            ))}
          </S.contTech>
          <S.Description>{project.description}</S.Description>
          <S.footer>
            {project.repository && (
            <a href={project.repository} target="_blank" rel="carochar">
              <img src={github} alt={project.description}/>
            </a>
          )}
          
          {project.website && (
            <a href={project.website} target="_blank" rel="carochar">
              <img src={website} alt={project.description} />
            </a>
          )}
          
          </S.footer>

        </S.projectConten_2>
        ))}
      </S.ContProject>
    </S.ContainerProject>
  );
}

export default Projects;

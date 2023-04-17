import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  // ! I have to map through project - In my const projectItems I am creating keys and IDs per item by using map for each project, it creates an id
  const projectItems = projects.map(project => 
    <ProjectItem
    {... project}
    key = {project.id}
    />
    );
//! Below I am rendering projectItems in my div with the id project list --- 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;

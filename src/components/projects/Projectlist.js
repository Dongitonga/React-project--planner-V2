import React from "react";
import ProjectSummary from "./Projectsummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  //console.log(projects)
  return (
    <div className="">
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} key={project.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;

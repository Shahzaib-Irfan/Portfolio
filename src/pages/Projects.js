import React from "react";
import { projects } from "../projectsdata";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section className="container-projects section-center">
      {projects.map((project) => {
        const { id, url, navigateTo, text } = project;
        return (
          <Project id={id} url={url} navigateTo={navigateTo} text={text} />
        );
      })}
    </section>
  );
};

export default Projects;

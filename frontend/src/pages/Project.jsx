import React from "react";
import { useParams } from "react-router-dom";

const projectData = {
  1: { id: 1, name: "Project One" },
  2: { id: 2, name: "Project Two" },
  3: { id: 3, name: "Project Three" },
};

const Project = () => {
  const { projectId } = useParams();
  const project = projectData[Number(projectId)]; // Convert projectId to a number

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return <div>{project.name}</div>;
};

export default Project;

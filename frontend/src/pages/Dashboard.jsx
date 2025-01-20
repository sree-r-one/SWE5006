import React from "react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, name: "Project One" },
  { id: 2, name: "Project Two" },
  { id: 3, name: "Project Three" },
];

const Dashboard = () => {
  return (
    <div>
      <h1>Project Dashboard</h1>
      <ul>
        {projects.map((proj, i) => (
          <li key={i}>
            <Link to={`/projects/${proj.id}`}>{proj.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

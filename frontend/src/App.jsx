import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Footer, Navbar } from "./components/Nav";
import { Home, About, Error, Dashboard, Project } from "./pages";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects/:projectId" element={<Project />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

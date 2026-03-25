import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./app/page";
import AboutPage from "./app/about/page";
import ExperiencePage from "./app/experience/page";
import ExperienceDetailPage from "./app/experience/detail-page";
import ContactPage from "./app/contact/page";
import ProjectsPage from "./app/projects/page";
import ProjectDetailPage from "./app/projects/detail-page";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.hash, location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ExperiencePage />} path="/experience" />
        <Route element={<ExperienceDetailPage />} path="/experience/:slug" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route element={<ProjectDetailPage />} path="/projects/:slug" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
    </>
  );
}

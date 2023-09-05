import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectPage from "../pages/ProjectPage";
import ResumePage from "../pages/ResumePage";
import HomePage from "../pages/HomePage";
import _cv from "../pages/_pages/_cv";
import _cerificates from "../pages/_pages/_certificates";
import _something from "../pages/_pages/_something";

const App = () => {
  const routes = [
    { path: "/", element: <HomePage />, id: 1 },
    { path: "/projects", element: <ProjectPage />, id: 2 },
    { path: "/resume", element: <ResumePage />, id: 3 },

    { path: "/resume/cv", element: <_cv />, id: 4 },
    { path: "/resume/certificates", element: <_cerificates />, id: 5 },
    { path: "/resume/something", element: <_something />, id: 6 },

    { path: "*", element: <NotFoundPage />, id: 10 },
  ];

  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;

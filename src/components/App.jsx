import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectPage from "../pages/ProjectPage";
import ResumePage from "../pages/ResumePage";
import HomePage from "../pages/HomePage";

const App = () => {
  const routes = [
    { path: "/", element: <HomePage />, id: 1 },
    { path: "/projects", element: <ProjectPage />, id: 2 },
    { path: "/resume", element: <ResumePage />, id: 3 },

    { path: "*", element: <NotFoundPage />, id: 5 },
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

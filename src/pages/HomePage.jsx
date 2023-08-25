import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import NotFoundPage from "./NotFoundPage";
import ProjectPage from "./ProjectPage";

const HomePage = () => {
  const routes = [
    { path: "/", element: <HomePage />, id: 1 },
    { path: "/projects", element: <ProjectPage />, id: 2 },

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

export default HomePage;

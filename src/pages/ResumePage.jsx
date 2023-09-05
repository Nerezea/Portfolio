import { NavLink, useParams } from "react-router-dom";
import _cv from "../pages/_pages/_cv";
import _cerificates from "../pages/_pages/_certificates";
import _something from "../pages/_pages/_something";

const ResumePage = () => {
  const { content } = useParams();
  console.log(content);

  const items = [
    { name: "CV", to: "/resume/cv", id: 1 },
    { name: "School Certificates", to: "/resume/certificates", id: 2 },
    { name: "Something", to: "/resume/something", id: 3 },
  ];

  return (
    <div className="content">
      <nav className="sidebar">
        <ul className="side-nav">
          {items.map((item) => {
            return (
              <li className="side-nav-item" key={item.id}>
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="main-view">
        <div className="main-text">
          {content === "cv" && <_cv />}
          {content === "certificates" && <_cerificates />}
          {content === "something" && <_something />}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

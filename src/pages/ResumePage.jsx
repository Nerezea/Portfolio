import { NavLink } from "react-router-dom";

const ResumePage = () => {
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
                <NavLink to={item.to}>
                  <span className="side-nav-item-link">{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="main-view">mainview</div>
    </div>
  );
};

export default ResumePage;

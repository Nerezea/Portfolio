import { NavLink } from "react-router-dom";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "Projects", to: "/projects", id: 2 },
    { name: "Resume", to: "/resume", id: 3 },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "",
                })}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <i className="fa-solid fa-bars burgermenu">
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "",
                  })}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </i>
    </nav>
  );
};

export default Navigation;

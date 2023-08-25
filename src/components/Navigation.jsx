import { NavLink } from "react-router-dom";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "Projects", to: "/projects", id: 2 },
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
                  color: isActive ? "hotpink" : "white",
                  borderBottom: isActive ? "2px solid orange" : "none",
                })}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

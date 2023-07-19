import "../css/header.css";

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="modify.html">Vocabulary</a>
          </li>
          <li>
            <a href="rules.html">Rules</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

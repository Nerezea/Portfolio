const ResumePage = () => {
  return (
    <div className="content">
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav-item side-nav-item-active">
            <a href="/resume/#" className="side-nav-item-link">
              <span className="side-nav-item-link-span">Lebenslauf</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="portfolio/#/resume/#" className="side-nav-item-link">
              <span className="side-nav-item-link-span">Zeugnisse</span>
            </a>
          </li>
          <li className="side-nav-item">
            <a href="/resume/#" className="side-nav-item-link">
              <span className="side-nav-item-link-span">Lebenslauf</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="main-view">mainview</div>
    </div>
  );
};

export default ResumePage;

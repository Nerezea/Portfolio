const ProjectPage = () => {
  return (
    <div className="projects">
      <div className="columns-3">
        <div className="column">
          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-1">&nbsp;</div>
              <div className="card-heading">
                <span className="card-heading-span card-heading-span-1">
                  Alpaca Farm Project
                </span>
              </div>
              <div className="card-details">
                <ul>
                  <li>HTML</li>
                  <li>SCSS / CSS</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-1">
              <div className="card-side-back-cta">
                <div className="card-side-back-cta-info">
                  <p className="card-side-back-cta-info-1">Test</p>
                  <p className="card-side-back-cta-info-2">Test</p>
                </div>
                <a href="#popup-1" className="card-side-back-cta-button">
                  To the Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-2">&nbsp;</div>
              <div className="card-heading">
                <span className="card-heading-span card-heading-span-2">
                  Korean Vocabulary
                </span>
              </div>
              <div className="card-details">
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>SCSS / CSS</li>
                  <li>JSON</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-2">
              <div className="card-side-back-cta">
                <div className="card-side-back-cta-info">
                  <p className="card-side-back-cta-info-1">Test</p>
                  <p className="card-side-back-cta-info-2">Test</p>
                </div>
                <a href="#popup-2" className="card-side-back-cta-button">
                  To the Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-3">&nbsp;</div>
              <div className="card-heading">
                <span className="card-heading-span card-heading-span-3">
                  Alpaca Farm Project
                </span>
              </div>
              <div className="card-details">
                <ul>
                  <li>hhhh</li>
                  <li>gggg</li>
                  <li>jjjj</li>
                  <li>kkkk</li>
                  <li>llll</li>
                </ul>
              </div>
            </div>
            <div className="card-side card-side-back card-side-back-3">
              <div className="card-side-back-cta">
                <div className="card-side-back-cta-info">
                  <p className="card-side-back-cta-info-1">Test</p>
                  <p className="card-side-back-cta-info-2">Test</p>
                </div>
                <a href="#popup-3" className="card-side-back-cta-button">
                  To the Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popup" id="popup-1">
        <div className="popup-content">
          <div className="popup-left">
            <img src="/images/alpaca.jpg" alt="Picture of Website" />
          </div>
          <div className="popup-right">
            <a href="#" className="popup-close">
              &times;
            </a>
            <h2 className="u-margin-bottom-small">to the github page</h2>
            <p className="u-margin-bottom-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              nobis enim minus voluptates ipsum culpa facilis exercitationem,
              quas harum ratione.
            </p>

            <a
              href="https://github.com/Nerezea/WebDev---Alpaca"
              className="popup-button"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="popup" id="popup-2">
        <div className="popup-content">
          <div className="popup-left">
            <img src="/images/korean.jpg" alt="Picture of Website" />
          </div>
          <div className="popup-right">
            <a href="#" className="popup-close">
              &times;
            </a>
            <h2 className="u-margin-bottom-small">to the github page</h2>
            <p className="u-margin-bottom-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              nobis enim minus voluptates ipsum culpa facilis exercitationem,
              quas harum ratione.
            </p>

            <a
              href="https://github.com/Nerezea/Korean-Vocabulary"
              className="popup-button"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="popup" id="popup-3">
        <div className="popup-content">
          <div className="popup-left">
            <img src="/images/placeholder.jpg" alt="Picture of Website" />
          </div>
          <div className="popup-right">
            <a href="#" className="popup-close">
              &times;
            </a>
            <h2 className="u-margin-bottom-small">to the github page</h2>
            <p className="u-margin-bottom-small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              nobis enim minus voluptates ipsum culpa facilis exercitationem,
              quas harum ratione.
            </p>
            <a href="http://" className="popup-button">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

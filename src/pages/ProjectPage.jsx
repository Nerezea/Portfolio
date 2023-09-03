const ProjectPage = () => {
  return (
    <div className="projects">
      <h2>Simple 3 Columns Layout Flexbox</h2>

      <div className="columns-3">
        <div className="column">
          <div className="card">
            <div className="card-side card-side-front">
              <div className="card-picture card-picture-1">&nbsp;</div>
              <div className="card-heading">Heading</div>
              <div className="card-details">Details</div>
            </div>
            <div className="card-side card-side-back card-side-back-1">
              BACK
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-side card-side-front">FRONT</div>
            <div className="card-side card-side-back card-side-back-2">
              BACK
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-side card-side-front">FRONT</div>
            <div className="card-side card-side-back card-side-back-3">
              BACK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

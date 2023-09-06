const HomePage = () => {
  return (
    <main className="homepage">
      <section className="about-section">
        <div className="u-center-text u-margin-bottom-big">
          <h2>Welcome to my Portfolio</h2>
        </div>

        <div className="about-container">
          <div className="text-content u-center-text">
            <h3 className="u-margin-bottom-small">Random Text about me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nobis placeat eum illum fugit, nostrum maxime explicabo
              voluptatibus ipsam tenetur! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Alias reprehenderit animi suscipit
              numquam voluptatibus ad rerum, dolorem optio earum culpa!
            </p>
            <h3 className="u-margin-bottom-small">
              Probably even more random text about me
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nobis placeat eum illum fugit, nostrum maxime explicabo
              voluptatibus ipsam tenetur! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sit aperiam cum esse inventore
              vitae perspiciatis dolor necessitatibus enim veniam nihil.
            </p>
          </div>
          <div className="image-content">
            <div className="image-composition">
              <img
                src="/public/images/placeholder.jpg"
                alt="photo-1"
                className="composition-photo composition-photo-1"
              />
              <img
                src="/public/images/placeholder.jpg"
                alt="photo-2"
                className="composition-photo composition-photo-2"
              />
              <img
                src="/public/images/placeholder.jpg"
                alt="photo-3"
                className="composition-photo composition-photo-3"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

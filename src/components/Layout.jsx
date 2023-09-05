import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <>
      <div className="flexbox-container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

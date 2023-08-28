import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.object,
  };
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

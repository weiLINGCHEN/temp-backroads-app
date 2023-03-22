import logo from "../images/logo.svg";
import PageLink from "./PageLink";
import SocilaLink from "./SocialLink";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLink ulClass="nav-links" aClass="nav-link" />

        <SocilaLink ulClass="nav-icons" aClass="nav-icon" />
      </div>
    </nav>
  );
};
export default Navbar;

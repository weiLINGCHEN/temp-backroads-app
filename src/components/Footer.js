import SocilaLink from "./SocialLink";
import PageLink from "./PageLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink ulClass="footer-links" aClass="footer-link" />

      <SocilaLink ulClass="footer-icons" aClass="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;

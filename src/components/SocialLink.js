import { socialLinks } from "../data";
const SocilaLink = ({ ulClass, aClass }) => {
  return (
    <ul className={ulClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li>
            <a
              key={id}
              href={href}
              target="_blank"
              className={aClass}
              rel="noreferrer"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocilaLink;

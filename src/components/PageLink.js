import { pageLinks } from "../data";
const PageLink = ({ ulClass, aClass }) => {
  return (
    <ul className={ulClass} id={ulClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={aClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLink;

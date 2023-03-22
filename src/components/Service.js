import ServiceArticle from "./ServiceArticle";
import Title from "./Title";
import { services } from "../data";
const Service = () => {
  return (
    <section className="section services" id="services">
      <Title blackTitle="our" blueTitle="services" />

      <div className="section-center services-center">
        {services.map(({ id, icon, heading, para }) => {
          return (
            <ServiceArticle
              key={id}
              icon={icon}
              heading={heading}
              para={para}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Service;

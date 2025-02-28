import React from "react";

const Services = ({ servicesProps }) => {
  return (
    <div className="services">
      {servicesProps.map((element, index) => (
        <div className="service" key={index}>
          <h3>{element.title}</h3>
          <p>{element.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;

import React from "react";
import { Link } from "react-router-dom";

function Items({ data }) {
  return (
    <div className="row ">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
        crossOrigin="anonymous"
      />
      {data.map((value) => {
        const { id, image, title, description, link } = value;
        if (link.includes("http")) {
          return (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="col-md-4 my-3 clean-links equal"
              key={id}
            >
              <div
                className="card dark-bg text-center"
                style={{ background: "rgba(10, 25, 47, 0.85)" }}
              >
                <img src={image} alt={title} className="img-responsive" />
                <h4 style={{ margin: "15px" }}>
                  {title}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </h4>
                <p>{description}</p>
              </div>
            </a>
          );
        } else {
          return (
            <Link
              to={link}
              className="col-md-4 my-3 clean-links equal"
              key={id}
            >
              <div
                className="card dark-bg text-center"
                style={{ background: "rgba(10, 25, 47, 0.85)" }}
              >
                <img src={image} alt={title} className="img-responsive" />
                <div>
                  <h4 style={{ margin: "15px" }}>{title}</h4>
                </div>
                <p>{description}</p>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default Items;

import React from "react";
import { FaSearch } from "react-icons/fa";

const Project = ({ id, url, navigateTo, text }) => {
  return (
    <div key={id} className="box">
      <img src={url} alt={url} />
      <div className="caption">
        {text} <br />
        <span>
          <a style={{ color: "burlywood" }} href={navigateTo}>
            Link
          </a>
        </span>
      </div>
    </div>
  );
};

export default Project;

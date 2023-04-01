import { React, useState, useEffect } from "react";
import { personalInfo } from "../data";
import shahzaib from "../Images/Picture.jpg";

const About = () => {
  const [text, setText] = useState(personalInfo);
  const [index, setIndex] = useState(1);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    if (index >= personalInfo.length + 1) {
      setIsReversed(true);
      setIndex(personalInfo.length);
    } else if (index === 0) {
      setIsReversed(false);
      setIndex(1);
    }

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        if (isReversed) {
          return prevIndex - 1;
        } else {
          return prevIndex + 1;
        }
      });
    }, 300);

    return () => clearInterval(intervalId);
  }, [index, isReversed]);

  return (
    <div className="section section-center">
      <div className="container-home">
        <div className="left">
          <h1 style={{ color: "AppWorkspace" }}>{text.slice(0, index)}</h1>
        </div>
        <div className="right">
          <img src={shahzaib} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

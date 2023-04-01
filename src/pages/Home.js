import { React, useState, useEffect } from "react";
import shahzaib from "../Images/shahzaib.jpg";
import { Skills } from "../data";

const Home = () => {
  const [text, setText] = useState(Skills);
  const [index, setIndex] = useState(1);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    if (index >= Skills.length + 1) {
      setIsReversed(true);
      setIndex(Skills.length);
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
          <h1 style={{ color: "burlywood" }}>
            Skills: <br /> <span>{Skills.slice(0, index)}</span>
          </h1>
        </div>
        <div className="right">
          <img src={shahzaib} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

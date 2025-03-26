import React, { useState, useEffect } from "react";

import AwayTD1 from "../assets/svgs/AwayTDSvgs/AwayTD1.svg";
import AwayTD2 from "../assets/svgs/AwayTDSvgs/AwayTD2.svg";
import AwayTD3 from "../assets/svgs/AwayTDSvgs/AwayTD3.svg";
import AwayTD4 from "../assets/svgs/AwayTDSvgs/AwayTD4.svg";
import AwayTD5 from "../assets/svgs/AwayTDSvgs/AwayTD5.svg";
import AwayTD6 from "../assets/svgs/AwayTDSvgs/AwayTD6.svg";
import AwayTD7 from "../assets/svgs/AwayTDSvgs/AwayTD7.svg";
import AwayTD8 from "../assets/svgs/AwayTDSvgs/AwayTD8.svg";
import AwayTD9 from "../assets/svgs/AwayTDSvgs/AwayTD9.svg";
import AwayTD10 from "../assets/svgs/AwayTDSvgs/AwayTD10.svg";
import AwayTD11 from "../assets/svgs/AwayTDSvgs/AwayTD11.svg";
import AwayTD12 from "../assets/svgs/AwayTDSvgs/AwayTD12.svg";

const AwayTDFrames: React.FC = () => {
  const frames = [
    AwayTD1, AwayTD2, AwayTD3, AwayTD4, AwayTD5, AwayTD6,
    AwayTD7, AwayTD8, AwayTD9, AwayTD10, AwayTD11, AwayTD12
  ];

  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 30);

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <img
      src={frames[currentFrame]}
      alt={`Frame ${currentFrame + 1}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AwayTDFrames;

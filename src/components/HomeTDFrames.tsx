import React, { useState, useEffect } from "react";

import homeTD1 from "../assets/svgs/homeTDSvgs/homeTD1.svg";
import homeTD2 from "../assets/svgs/homeTDSvgs/homeTD2.svg";
import homeTD3 from "../assets/svgs/homeTDSvgs/homeTD3.svg";
import homeTD4 from "../assets/svgs/homeTDSvgs/homeTD4.svg";
import homeTD5 from "../assets/svgs/homeTDSvgs/homeTD5.svg";
import homeTD6 from "../assets/svgs/homeTDSvgs/homeTD6.svg";
import homeTD7 from "../assets/svgs/homeTDSvgs/homeTD7.svg";
import homeTD8 from "../assets/svgs/homeTDSvgs/homeTD8.svg";
import homeTD9 from "../assets/svgs/homeTDSvgs/homeTD9.svg";
import homeTD10 from "../assets/svgs/homeTDSvgs/homeTD10.svg";
import homeTD11 from "../assets/svgs/homeTDSvgs/homeTD11.svg";
import homeTD12 from "../assets/svgs/homeTDSvgs/homeTD12.svg";

const HomeTDFrames: React.FC = () => {
  const frames = [
    homeTD1, homeTD2, homeTD3, homeTD4, homeTD5, homeTD6,
    homeTD7, homeTD8, homeTD9, homeTD10, homeTD11, homeTD12
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

export default HomeTDFrames;

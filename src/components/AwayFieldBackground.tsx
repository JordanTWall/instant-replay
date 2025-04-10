// src/components/AwayFieldBackground.tsx
import React, { useEffect, useState } from "react";

import Away1 from "../assets/svgs/awayFieldSvgs/awayfieldcheer1.svg";
import Away2 from "../assets/svgs/awayFieldSvgs/awayfieldcheer2.svg";
import Away3 from "../assets/svgs/awayFieldSvgs/awayfieldcheer3.svg";
import Away4 from "../assets/svgs/awayFieldSvgs/awayfieldcheer4.svg";
import Away5 from "../assets/svgs/awayFieldSvgs/awayfieldcheer5.svg";
import Away6 from "../assets/svgs/awayFieldSvgs/awayfieldcheer6.svg";


interface AwayFieldBackgroundProps {
  
  isCheering: boolean;
}

const frames = [
  Away1, Away2, Away3, Away4, Away5, Away6,
];

const AwayFieldBackground: React.FC<AwayFieldBackgroundProps> = ({  isCheering }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isCheering) {
      interval = setInterval(() => {
        setFrameIndex((prev) => (prev + 1) % frames.length);
      }, 100);
    } else {
      setFrameIndex(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCheering]);

  return <img src={frames[frameIndex]} alt="Home Field Background" className="w-full h-full object-cover fill-none" />;
};

export default AwayFieldBackground;

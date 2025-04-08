// src/components/HomeFieldBackground.tsx
import React, { useEffect, useState } from "react";

import Home1 from "../assets/svgs/HomeFieldSvgs/Homefieldcheer1.svg";
import Home2 from "../assets/svgs/HomeFieldSvgs/Homefieldcheer2.svg";
import Home3 from "../assets/svgs/HomeFieldSvgs/Homefieldcheer3.svg";
import Home4 from "../assets/svgs/HomeFieldSvgs/Homefieldcheer4.svg";
import Home5 from "../assets/svgs/HomeFieldSvgs/Homefieldcheer5.svg";
import Home6 from "../assets/svgs/HomeFieldSvgs/Homefieldcheer6.svg";


interface HomeFieldBackgroundProps {
  
  isCheering: boolean;
}

const frames = [
  Home1, Home2, Home3, Home4, Home5, Home6,
];

const HomeFieldBackground: React.FC<HomeFieldBackgroundProps> = ({  isCheering }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isCheering) {
      interval = setInterval(() => {
        setFrameIndex((prev) => (prev + 1) % frames.length);
      }, 30);
    } else {
      setFrameIndex(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCheering]);

  return <img src={frames[frameIndex]} alt="Away Field Background" className="w-full h-full" />;
};

export default HomeFieldBackground;

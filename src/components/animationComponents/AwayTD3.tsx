import React from 'react';

interface AwayTD3Props {
  backgroundColor: string; // Color for the background sections
  textColor: string; // Color for the text sections
  playerImg: string; // URL for the player's image
}

const AwayTD3: React.FC<AwayTD3Props> = ({ backgroundColor, textColor, playerImg }) => (
  <svg width="114.0" height="286.5" viewBox="0 0 76 191" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="scale(-1, 1) translate(-76, 0)">
      <rect x="11.4527" y="153.001" width="6" height="40" rx="3" transform="rotate(-94.3274 11.4527 153.001)" fill="black"/>
      <rect x="51.8416" y="85.8426" width="6" height="30" rx="3" transform="rotate(-126.597 51.8416 85.8426)" fill="black"/>
      <rect x="33.8183" y="62.0475" width="12" height="30" rx="6" transform="rotate(-20.1807 33.8183 62.0475)" fill={backgroundColor}/>
      <rect x="55.634" y="145.42" width="8" height="50" rx="4" transform="rotate(145.935 55.634 145.42)" fill={textColor}/>
      <rect x="7.43506" y="189.775" width="6" height="40" rx="3" transform="rotate(-154.937 7.43506 189.775)" fill="black"/>
      <rect x="19.9978" y="184" width="6" height="16" rx="3" transform="rotate(89.0529 19.9978 184)" fill={textColor}/>
      <rect x="20.9078" y="53" width="12" height="30" rx="6" transform="rotate(29.7969 20.9078 53)" fill={backgroundColor}/>
      <rect x="11.6769" y="146" width="6" height="16" rx="3" transform="rotate(46.8702 11.6769 146)" fill={textColor}/>
      <rect x="27.8935" y="154.915" width="8" height="50" rx="4" transform="rotate(176.667 27.8935 154.915)" fill={textColor}/>
      <rect x="26.5516" y="51" width="14" height="58" rx="7" transform="rotate(10.4818 26.5516 51)" fill={backgroundColor}/>
      <ellipse cx="21.4149" cy="11.4767" rx="21.4149" ry="11.4767" transform="matrix(0.849605 -0.52742 0.525194 0.850982 11.2252 83.6787)" fill="#815337"/>
      <rect x="25.0285" y="86.8778" width="22.4029" height="3.06048" rx="1.53024" transform="rotate(-31.2507 25.0285 86.8778)" fill="black"/>
      <rect x="30.0603" y="90.0892" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 30.0603 90.0892)" fill="black"/>
      <rect x="36.5383" y="86.1581" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 36.5383 86.1581)" fill="black"/>
      <rect x="33.7217" y="87.8673" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 33.7217 87.8673)" fill="black"/>
      <rect x="39.3548" y="84.449" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 39.3548 84.449)" fill="black"/>
      <rect x="42.7346" y="82.398" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 42.7346 82.398)" fill="black"/>
      <rect x="36.5931" y="83.1296" width="6" height="30" rx="3" transform="rotate(101.79 36.5931 83.1296)" fill="black"/>
      <g>
        <circle cx="42" cy="30" r="30" fill={textColor} stroke="black" strokeWidth="1" />
        <image href={playerImg} x="2" y="-10" width="80" height="80" clipPath="circle(30)" />
      </g>
    </g>
  </svg>
);

export default AwayTD3;

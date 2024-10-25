import React from 'react';
interface AwayTD1Props {
  backgroundColor: string; // Color for the background sections
  textColor: string; // Color for the text sections
  playerImg: string; // URL for the player's image
}

const AwayTD1: React.FC<AwayTD1Props> = ({ backgroundColor, textColor, playerImg }) => (
  <svg width="184.5" height="288.0" viewBox="0 0 123 192" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="scale(-1, 1) translate(-123, 0)">
      <rect x="113.341" y="187.73" width="6" height="40" rx="3" transform="rotate(153.286 113.341 187.73)" fill="black"/>
      <rect x="102.387" y="81.7332" width="6" height="30" rx="3" transform="rotate(-158.065 102.387 81.7332)" fill="black"/>
      <rect x="74" y="68.8253" width="12" height="30" rx="6" transform="rotate(-53.5352 74 68.8253)" fill={backgroundColor}/>
      <rect x="96.7524" y="153.503" width="8" height="50" rx="4" transform="rotate(152.569 96.7524 153.503)" fill={textColor}/>
      <rect x="8.27815" y="166.494" width="6" height="40" rx="3" transform="rotate(-112.279 8.27815 166.494)" fill="black"/>
      <rect x="7.45042" y="159.001" width="6" height="16" rx="3" transform="rotate(27.77 7.45042 159.001)" fill={textColor}/>
      <rect x="70.5009" y="59" width="12" height="30" rx="6" transform="rotate(66.4478 70.5009 59)" fill={backgroundColor}/>
      <rect x="120.225" y="179" width="6" height="16" rx="3" transform="rotate(62.7556 120.225 179)" fill={textColor}/>
      <rect x="42.9279" y="153.489" width="8" height="50" rx="4" transform="rotate(-145.217 42.9279 153.489)" fill={textColor}/>
      <rect x="70.5516" y="56" width="14" height="58" rx="7" transform="rotate(10.4818 70.5516 56)" fill={backgroundColor}/>
      <ellipse cx="21.4149" cy="11.4767" rx="21.4149" ry="11.4767" transform="matrix(0.849605 -0.52742 0.525194 0.850982 51.2252 90.6787)" fill="#815337"/>
      <rect x="65.0285" y="93.8778" width="22.4029" height="3.06048" rx="1.53024" transform="rotate(-31.2507 65.0285 93.8778)" fill="black"/>
      <rect x="70.0603" y="97.0892" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 70.0603 97.0892)" fill="black"/>
      <rect x="76.5383" y="93.1581" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 76.5383 93.1581)" fill="black"/>
      <rect x="73.7217" y="94.8673" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 73.7217 94.8673)" fill="black"/>
      <rect x="79.3548" y="91.449" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 79.3548 91.449)" fill="black"/>
      <rect x="82.7346" y="89.398" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 82.7346 89.398)" fill="black"/>
      <rect x="78.2297" y="91.7686" width="6" height="30" rx="3" transform="rotate(123.984 78.2297 91.7686)" fill="black"/>
      <g>
        <circle cx="77" cy="30" r="30" fill={textColor} stroke="black" strokeWidth="1" />
        <image href={playerImg} x="37" y="-10" width="80" height="80" clipPath="circle(30)" />
      </g>
    </g>
  </svg>
);

export default AwayTD1;

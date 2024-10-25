import React from 'react';

interface HomeTD5Props {
  backgroundColor: string; // Color for the background sections
  textColor: string; // Color for the text sections
  playerImg: string; // URL for the player's image
}

const HomeTD5: React.FC<HomeTD5Props> = ({ backgroundColor, textColor, playerImg }) => (
  <svg width="172.5" height="280.5" viewBox="0 0 115 187" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(20, 0)">
<rect x="102.964" y="177.415" width="6" height="40" rx="3" transform="rotate(-173.76 102.964 177.415)" fill="black"/>
<rect x="100.273" y="82.4834" width="6" height="30" rx="3" transform="rotate(-152.528 100.273 82.4834)" fill="black"/>
<rect x="73.1087" y="66.5562" width="12" height="30" rx="6" transform="rotate(-52.0237 73.1087 66.5562)" fill={backgroundColor}/>
<rect x="108.461" y="135.564" width="8" height="50" rx="4" transform="rotate(127.683 108.461 135.564)" fill={textColor}/>
<rect x="8.22581" y="172.992" width="6" height="40" rx="3" transform="rotate(-123.745 8.22581 172.992)" fill="black"/>
<rect x="5.63395" y="183.087" width="6" height="16" rx="3" transform="rotate(-159.883 5.63395 183.087)" fill={textColor}/>
<rect x="65.9609" y="56" width="12" height="30" rx="6" transform="rotate(68.7535 65.9609 56)" fill={backgroundColor}/>
<rect x="114.303" y="181.847" width="6" height="16" rx="3" transform="rotate(127.985 114.303 181.847)" fill={textColor}/>
<rect x="40.877" y="153.068" width="8" height="50" rx="4" transform="rotate(-149.274 40.877 153.068)" fill={textColor}/>
<rect x="66.5516" y="53" width="14" height="58" rx="7" transform="rotate(10.4818 66.5516 53)" fill={backgroundColor}/>
<ellipse cx="21.4149" cy="11.4767" rx="21.4149" ry="11.4767" transform="matrix(0.849605 -0.52742 0.525194 0.850982 42.2252 89.6787)" fill="#815337"/>
<rect x="56.0285" y="92.8778" width="22.4029" height="3.06048" rx="1.53024" transform="rotate(-31.2507 56.0285 92.8778)" fill="black"/>
<rect x="61.0603" y="96.0892" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 61.0603 96.0892)" fill="black"/>
<rect x="67.5383" y="92.1581" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 67.5383 92.1581)" fill="black"/>
<rect x="64.7217" y="93.8673" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 64.7217 93.8673)" fill="black"/>
<rect x="70.3548" y="90.449" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 70.3548 90.449)" fill="black"/>
<rect x="73.7346" y="88.398" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 73.7346 88.398)" fill="black"/>
<rect x="65.1799" y="92.9503" width="6" height="30" rx="3" transform="rotate(139.701 65.1799 92.9503)" fill="black"/>


    <g>
      <circle cx="80" cy="30" r="30" fill={textColor} stroke="black" strokeWidth="1" />
      <image
        href={playerImg}
        x="40"
        y="-10"
        width="80"
        height="80"
        clipPath="circle(30)"
      />
    </g>
    
</svg>

);

export default HomeTD5;

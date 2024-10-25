import React from 'react';

interface HomeTD4Props {
  backgroundColor: string; // Color for the background sections
  textColor: string; // Color for the text sections
  playerImg: string; // URL for the player's image
}

const HomeTD4: React.FC<HomeTD4Props> = ({ backgroundColor, textColor, playerImg }) => (
  <svg width="123.0" height="300.0" viewBox="0 0 82 200" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(30, 0)">
<rect x="41.9755" y="181.523" width="6" height="40" rx="3" transform="rotate(-146.022 41.9755 181.523)" fill="black"/>
<rect x="65.0395" y="88.0684" width="6" height="30" rx="3" transform="rotate(-147.653 65.0395 88.0684)" fill="black"/>
<rect x="43.5351" y="63.3402" width="12" height="30" rx="6" transform="rotate(-26.6441 43.5351 63.3402)" fill={backgroundColor}/>
<rect x="65.634" y="147.42" width="8" height="50" rx="4" transform="rotate(145.935 65.634 147.42)" fill={textColor}/>
<rect x="5.43507" y="189.775" width="6" height="40" rx="3" transform="rotate(-154.937 5.43507 189.775)" fill="black"/>
<rect x="12.1157" y="196.548" width="6" height="16" rx="3" transform="rotate(155.401 12.1157 196.548)" fill={textColor}/>
<rect x="35.0268" y="55" width="12" height="30" rx="6" transform="rotate(50.1352 35.0268 55)" fill={backgroundColor}/>
<rect x="52.1445" y="185.918" width="6" height="16" rx="3" transform="rotate(138.149 52.1445 185.918)" fill={textColor}/>
<rect x="21.7345" y="157.385" width="8" height="50" rx="4" transform="rotate(-165.199 21.7345 157.385)" fill={textColor}/>
<rect x="36.5516" y="53" width="14" height="58" rx="7" transform="rotate(10.4818 36.5516 53)" fill={backgroundColor}/>
<ellipse cx="21.4149" cy="11.4767" rx="21.4149" ry="11.4767" transform="matrix(0.849605 -0.52742 0.525194 0.850982 18.2252 89.6787)" fill="#815337"/>
<rect x="32.0285" y="92.8778" width="22.4029" height="3.06048" rx="1.53024" transform="rotate(-31.2507 32.0285 92.8778)" fill="black"/>
<rect x="37.0603" y="96.0892" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 37.0603 96.0892)" fill="black"/>
<rect x="43.5383" y="92.1581" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 43.5383 92.1581)" fill="black"/>
<rect x="40.7217" y="93.8673" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 40.7217 93.8673)" fill="black"/>
<rect x="46.3548" y="90.449" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 46.3548 90.449)" fill="black"/>
<rect x="49.7346" y="88.398" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 49.7346 88.398)" fill="black"/>
<rect x="40.583" y="90.632" width="6" height="30" rx="3" transform="rotate(121.109 40.583 90.632)" fill="black"/>


    <g>
      <circle cx="50" cy="30" r="30" fill={textColor} stroke="black" strokeWidth="1" />
      <image
        href={playerImg}
        x="10"
        y="-10"
        width="80"
        height="80"
        clipPath="circle(30)"
      />
    </g>
    
</svg>

);

export default HomeTD4;

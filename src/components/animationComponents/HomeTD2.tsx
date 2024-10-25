import React from 'react';

interface HomeTD2Props {
  backgroundColor: string; // Color for the background sections
  textColor: string; // Color for the text sections
  playerImg: string; // URL for the player's image
}

const HomeTD2: React.FC<HomeTD2Props> = ({ backgroundColor, textColor, playerImg }) => (
  <svg width="156.0" height="273.0" viewBox="0 0 104 182" fill="none" xmlns="http://www.w3.org/2000/svg" transform="translate(3, 0)">
<rect x="77.6085" y="181.164" width="6" height="40" rx="3" transform="rotate(-151.031 77.6085 181.164)" fill="black"/>
<rect x="97.9044" y="71.5421" width="6" height="30" rx="3" transform="rotate(177.324 97.9044 71.5421)" fill="black"/>
<rect x="67.497" y="66.7798" width="12" height="30" rx="6" transform="rotate(-71.2672 67.497 66.7798)" fill={backgroundColor}/>
<rect x="98.7759" y="144.801" width="8" height="50" rx="4" transform="rotate(139.114 98.7759 144.801)" fill={textColor}/>
<rect x="10" y="151.929" width="6" height="40" rx="3" transform="rotate(-81.147 10 151.929)" fill="black"/>
<rect x="11.6259" y="144.575" width="6" height="16" rx="3" transform="rotate(42.9017 11.6259 144.575)" fill={textColor}/>
<rect x="67.3127" y="55.9273" width="12" height="30" rx="6" transform="rotate(97.5221 67.3127 55.9273)" fill={backgroundColor}/>
<rect x="88.7014" y="172" width="6" height="16" rx="3" transform="rotate(78.9142 88.7014 172)" fill={textColor}/>
<rect x="52.8695" y="157.623" width="8" height="50" rx="4" transform="rotate(-169.638 52.8695 157.623)" fill={textColor}/>
<rect x="63.5516" y="53" width="14" height="58" rx="7" transform="rotate(10.4818 63.5516 53)" fill={backgroundColor}/>
<ellipse cx="21.4149" cy="11.4767" rx="21.4149" ry="11.4767" transform="matrix(0.849605 -0.52742 0.525194 0.850982 35.2252 81.6787)" fill="#815337"/>
<rect x="49.0285" y="84.8778" width="22.4029" height="3.06048" rx="1.53024" transform="rotate(-31.2507 49.0285 84.8778)" fill="black"/>
<rect x="54.0603" y="88.0892" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 54.0603 88.0892)" fill="black"/>
<rect x="60.5383" y="84.1581" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 60.5383 84.1581)" fill="black"/>
<rect x="57.7217" y="85.8673" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 57.7217 85.8673)" fill="black"/>
<rect x="63.3548" y="82.449" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 63.3548 82.449)" fill="black"/>
<rect x="66.7346" y="80.398" width="7.65121" height="1.31782" rx="0.65891" transform="rotate(-121.251 66.7346 80.398)" fill="black"/>
<rect x="57.3804" y="83.8592" width="6" height="30" rx="3" transform="rotate(149.539 57.3804 83.8592)" fill="black"/>


    <g>
      <circle cx="74" cy="30" r="30" fill={textColor} stroke="black" strokeWidth="1" />
      <image
        href={playerImg}
        x="34"
        y="-10"
        width="80"
        height="80"
        clipPath="circle(30)"
      />
    </g>
    
</svg>

);

export default HomeTD2;

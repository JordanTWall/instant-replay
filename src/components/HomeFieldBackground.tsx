import React from 'react';

interface HomeFieldBackgroundProps {
    fill: string; // Color for the home team section
  }

const HomeFieldBackground: React.FC<HomeFieldBackgroundProps> = ({ fill }) => (
    <svg 
    className="w-full h-full"  // Use Tailwind to make it scale
    viewBox="0 0 808 608" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice" // Ensures the SVG scales properly
  >
    <rect width="808" height="608" fill="#1E1E1E"/>
    <g filter="url(#filter0_d_16_3)">
      <g clipPath="url(#clip0_16_3)">
        <rect x="4" width="800" height="600" fill="url(#paint0_linear_16_3)"/>
        <rect x="4" y="328" width="800" height="272" fill="#36DC65"/>
        <rect x="311" y="585" width="6" height="16" fill="white"/>
        <rect x="155" y="585" width="6" height="16" fill="white"/>
        <path d="M208.5 585H214.5V601H208.5V585Z" fill="white"/>
        <rect x="260" y="585" width="6" height="16" fill="white"/>
       
        <rect x="600" y="328" width="204" height="272" fill={fill}/>
    <path d="M364.734 477.996C364.734 476.277 364.962 474.721 365.418 473.328C365.887 471.935 366.525 470.691 367.332 469.598C368.152 468.504 369.109 467.56 370.203 466.766C371.297 465.971 372.469 465.314 373.719 464.793C374.982 464.272 376.297 463.888 377.664 463.641C379.044 463.38 380.411 463.25 381.766 463.25C383.12 463.25 384.48 463.38 385.848 463.641C387.228 463.888 388.549 464.272 389.812 464.793C391.076 465.314 392.254 465.971 393.348 466.766C394.454 467.56 395.411 468.504 396.219 469.598C397.039 470.691 397.677 471.935 398.133 473.328C398.602 474.721 398.836 476.277 398.836 477.996C398.836 479.715 398.602 481.271 398.133 482.664C397.677 484.057 397.039 485.301 396.219 486.395C395.411 487.488 394.454 488.439 393.348 489.246C392.254 490.04 391.076 490.698 389.812 491.219C388.549 491.74 387.228 492.124 385.848 492.371C384.48 492.632 383.12 492.762 381.766 492.762C380.411 492.762 379.044 492.638 377.664 492.391C376.297 492.143 374.982 491.766 373.719 491.258C372.469 490.75 371.297 490.099 370.203 489.305C369.109 488.51 368.152 487.566 367.332 486.473C366.525 485.379 365.887 484.129 365.418 482.723C364.962 481.316 364.734 479.741 364.734 477.996ZM375.828 477.996C375.828 479.533 375.945 480.958 376.18 482.273C376.427 483.576 376.792 484.708 377.273 485.672C377.768 486.635 378.387 487.391 379.129 487.938C379.871 488.484 380.75 488.758 381.766 488.758C382.781 488.758 383.66 488.478 384.402 487.918C385.158 487.358 385.783 486.596 386.277 485.633C386.772 484.669 387.137 483.536 387.371 482.234C387.618 480.919 387.742 479.507 387.742 477.996C387.742 476.473 387.625 475.047 387.391 473.719C387.169 472.378 386.818 471.219 386.336 470.242C385.854 469.253 385.236 468.478 384.48 467.918C383.725 467.345 382.82 467.059 381.766 467.059C380.75 467.059 379.871 467.345 379.129 467.918C378.387 468.478 377.768 469.253 377.273 470.242C376.792 471.219 376.427 472.378 376.18 473.719C375.945 475.047 375.828 476.473 375.828 477.996Z" fill="white"/>
    <path d="M333.68 487.039V470.906L328.172 467.703L340.086 463.992H343.582V487.039L348.875 492H328.387L333.68 487.039Z" fill="white"/>
    <path d="M134.734 478.996C134.734 477.277 134.962 475.721 135.418 474.328C135.887 472.935 136.525 471.691 137.332 470.598C138.152 469.504 139.109 468.56 140.203 467.766C141.297 466.971 142.469 466.314 143.719 465.793C144.982 465.272 146.297 464.888 147.664 464.641C149.044 464.38 150.411 464.25 151.766 464.25C153.12 464.25 154.48 464.38 155.848 464.641C157.228 464.888 158.549 465.272 159.812 465.793C161.076 466.314 162.254 466.971 163.348 467.766C164.454 468.56 165.411 469.504 166.219 470.598C167.039 471.691 167.677 472.935 168.133 474.328C168.602 475.721 168.836 477.277 168.836 478.996C168.836 480.715 168.602 482.271 168.133 483.664C167.677 485.057 167.039 486.301 166.219 487.395C165.411 488.488 164.454 489.439 163.348 490.246C162.254 491.04 161.076 491.698 159.812 492.219C158.549 492.74 157.228 493.124 155.848 493.371C154.48 493.632 153.12 493.762 151.766 493.762C150.411 493.762 149.044 493.638 147.664 493.391C146.297 493.143 144.982 492.766 143.719 492.258C142.469 491.75 141.297 491.099 140.203 490.305C139.109 489.51 138.152 488.566 137.332 487.473C136.525 486.379 135.887 485.129 135.418 483.723C134.962 482.316 134.734 480.741 134.734 478.996ZM145.828 478.996C145.828 480.533 145.945 481.958 146.18 483.273C146.427 484.576 146.792 485.708 147.273 486.672C147.768 487.635 148.387 488.391 149.129 488.938C149.871 489.484 150.75 489.758 151.766 489.758C152.781 489.758 153.66 489.478 154.402 488.918C155.158 488.358 155.783 487.596 156.277 486.633C156.772 485.669 157.137 484.536 157.371 483.234C157.618 481.919 157.742 480.507 157.742 478.996C157.742 477.473 157.625 476.047 157.391 474.719C157.169 473.378 156.818 472.219 156.336 471.242C155.854 470.253 155.236 469.478 154.48 468.918C153.725 468.345 152.82 468.059 151.766 468.059C150.75 468.059 149.871 468.345 149.129 468.918C148.387 469.478 147.768 470.253 147.273 471.242C146.792 472.219 146.427 473.378 146.18 474.719C145.945 476.047 145.828 477.473 145.828 478.996Z" fill="white"/>
    <path d="M83.9844 493C83.6849 492.284 83.431 491.548 83.2227 490.793C83.0273 490.038 82.9297 489.204 82.9297 488.293C82.9297 487.199 83.0859 486.229 83.3984 485.383C83.7109 484.536 84.1341 483.788 84.668 483.137C85.2148 482.486 85.8529 481.926 86.582 481.457C87.3242 480.975 88.1185 480.559 88.9648 480.207C89.8242 479.855 90.7161 479.556 91.6406 479.309C92.5781 479.048 93.5091 478.814 94.4336 478.605C95.9701 478.267 97.3307 477.954 98.5156 477.668C99.7005 477.382 100.697 477.043 101.504 476.652C102.311 476.262 102.923 475.793 103.34 475.246C103.757 474.686 103.965 473.97 103.965 473.098C103.965 472.303 103.815 471.613 103.516 471.027C103.216 470.441 102.799 469.96 102.266 469.582C101.745 469.191 101.133 468.905 100.43 468.723C99.7266 468.527 98.9648 468.43 98.1445 468.43C97.181 468.43 96.3346 468.54 95.6055 468.762C94.8893 468.983 94.2839 469.348 93.7891 469.855C93.3073 470.35 92.9427 471.001 92.6953 471.809C92.4479 472.603 92.3242 473.586 92.3242 474.758H83.6328C83.5807 474.445 83.5417 474.107 83.5156 473.742C83.4896 473.378 83.4766 473.052 83.4766 472.766C83.4766 471.633 83.6654 470.637 84.043 469.777C84.4336 468.905 84.9674 468.156 85.6445 467.531C86.3346 466.893 87.1484 466.366 88.0859 465.949C89.0365 465.533 90.0781 465.201 91.2109 464.953C92.3438 464.693 93.5482 464.51 94.8242 464.406C96.1003 464.302 97.4089 464.25 98.75 464.25C101.445 464.25 103.776 464.452 105.742 464.855C107.721 465.259 109.349 465.845 110.625 466.613C111.901 467.382 112.845 468.326 113.457 469.445C114.082 470.552 114.395 471.822 114.395 473.254C114.395 474.23 114.212 475.103 113.848 475.871C113.496 476.639 113.014 477.329 112.402 477.941C111.79 478.553 111.068 479.094 110.234 479.562C109.401 480.031 108.503 480.448 107.539 480.812C106.589 481.177 105.599 481.496 104.57 481.77C103.542 482.03 102.526 482.264 101.523 482.473C100.273 482.733 99.1146 483.007 98.0469 483.293C96.9792 483.579 96.0547 483.898 95.2734 484.25C94.5052 484.602 93.8997 485.005 93.457 485.461C93.0143 485.904 92.793 486.424 92.793 487.023C92.793 487.154 92.7995 487.29 92.8125 487.434C92.8255 487.577 92.8451 487.714 92.8711 487.844H105.82L113.73 480.91V493H83.9844Z" fill="white"/>
    <g filter="url(#filter1_d_16_3)">
    <rect x="353" y="328" width="6" height="272.004" fill="white"/>
    <rect x="123" y="328.996" width="6" height="272.004" fill="white"/>
    <rect x="597" y="328" width="6" height="272.004" fill="white"/>
    </g>
    <g filter="url(#filter2_dd_16_3)">
    <rect x="775" y="220" width="6" height="214" fill="#FFE606"/>
    <rect x="775.25" y="220.25" width="5.5" height="213.5" stroke="black" stroke-width="0.5"/>
    </g>
    <g filter="url(#filter3_dd_16_3)">
    <rect x="731" y="-47" width="6" height="214" fill="#FFE606"/>
    <rect x="731.25" y="-46.75" width="5.5" height="213.5" stroke="black" stroke-width="0.5"/>
    </g>
    <g filter="url(#filter4_dd_16_3)">
    <rect x="731" y="165.74" width="6" height="143.099" transform="rotate(-38.5577 731 165.74)" fill="#FFE606"/>
    <rect x="731.351" y="165.779" width="5.5" height="142.599" transform="rotate(-38.5577 731.351 165.779)" stroke="black" stroke-width="0.5"/>
    </g> 
    <rect x="555" y="584" width="6" height="16" fill="white"/>
    <rect x="399" y="584" width="6" height="16" fill="white"/>
    <path d="M452.5 584H458.5V600H452.5V584Z" fill="white"/>
    <rect x="504" y="584" width="6" height="16" fill="white"/>
    <rect x="318" y="369" width="6" height="16" fill="white"/>
    <rect x="162" y="369" width="6" height="16" fill="white"/>
    <path d="M215.5 369H221.5V385H215.5V369Z" fill="white"/>
    <rect x="267" y="369" width="6" height="16" fill="white"/>
    <rect x="555" y="369" width="6" height="16" fill="white"/>
    <rect x="399" y="369" width="6" height="16" fill="white"/>
    <path d="M452.5 369H458.5V385H452.5V369Z" fill="white"/>
    <rect x="504" y="369" width="6" height="16" fill="white"/>
    <path d="M187.5 477.004L173.997 483.493L174.003 470.503L187.5 477.004Z" fill="white"/>
    <path d="M417.5 477.004L403.997 483.493L404.003 470.503L417.5 477.004Z" fill="white"/>
    <rect x="346" y="375" width="20" height="3" fill="white"/>
    <rect x="116" y="375" width="20" height="3" fill="white"/>
    <rect x="79" y="583" width="6" height="16" fill="white"/>
    <rect x="28" y="583" width="6" height="16" fill="white"/>
    <rect x="79" y="368" width="6" height="16" fill="white"/>
    <rect x="28" y="368" width="6" height="16" fill="white"/>
    </g>
    <rect x="4.5" y="0.5" width="799" height="599" stroke="black"/>
    </g>
    <defs>
    <filter id="filter0_d_16_3" x="0" y="0" width="808" height="608" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_3" result="shape"/>
    </filter>
    <filter id="filter1_d_16_3" x="119" y="328" width="488" height="281" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_3" result="shape"/>
    </filter>
    <filter id="filter2_dd_16_3" x="771" y="220" width="14" height="222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_16_3" result="effect2_dropShadow_16_3"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_16_3" result="shape"/>
    </filter>
    <filter id="filter3_dd_16_3" x="727" y="-47" width="14" height="222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_16_3" result="effect2_dropShadow_16_3"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_16_3" result="shape"/>
    </filter>
    <filter id="filter4_dd_16_3" x="727" y="162" width="101.886" height="123.64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_16_3" result="effect2_dropShadow_16_3"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_16_3" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_16_3" x1="404" y1="0" x2="404" y2="600" gradientUnits="userSpaceOnUse">
    <stop stop-color="#6BF1FA"/>
    <stop offset="0.208025" stop-color="#B5F8FC"/>
    <stop offset="1" stop-color="white"/>
    </linearGradient>
    <clipPath id="clip0_16_3">
    <rect x="4" width="800" height="600" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    )
  

export default HomeFieldBackground

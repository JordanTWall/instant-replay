import React from 'react';

interface AwayFieldBackgroundProps {
  fill: string; // Color for the away team section
}

const AwayFieldBackground: React.FC<AwayFieldBackgroundProps> = ({ fill }) => (
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
        <rect width="800" height="600" transform="matrix(-1 0 0 1 804 0)" fill="url(#paint0_linear_16_3)"/>
        <rect width="800" height="272" transform="matrix(-1 0 0 1 804 328)" fill="#36DC65"/>
        <rect width="6" height="16" transform="matrix(-1 0 0 1 497 585)" fill="white"/>
        <rect width="6" height="16" transform="matrix(-1 0 0 1 653 585)" fill="white"/>
        <path d="M599.5 585H593.5V601H599.5V585Z" fill="white"/>
        <rect width="6" height="16" transform="matrix(-1 0 0 1 548 585)" fill="white"/>
        <rect width="204" height="272" transform="matrix(-1 0 0 1 208 328)" fill={fill} /> 
        <path d="M457.734 478.996C457.734 477.277 457.962 475.721 458.418 474.328C458.887 472.935 459.525 471.691 460.332 470.598C461.152 469.504 462.109 468.56 463.203 467.766C464.297 466.971 465.469 466.314 466.719 465.793C467.982 465.272 469.297 464.888 470.664 464.641C472.044 464.38 473.411 464.25 474.766 464.25C476.12 464.25 477.48 464.38 478.848 464.641C480.228 464.888 481.549 465.272 482.812 465.793C484.076 466.314 485.254 466.971 486.348 467.766C487.454 468.56 488.411 469.504 489.219 470.598C490.039 471.691 490.677 472.935 491.133 474.328C491.602 475.721 491.836 477.277 491.836 478.996C491.836 480.715 491.602 482.271 491.133 483.664C490.677 485.057 490.039 486.301 489.219 487.395C488.411 488.488 487.454 489.439 486.348 490.246C485.254 491.04 484.076 491.698 482.812 492.219C481.549 492.74 480.228 493.124 478.848 493.371C477.48 493.632 476.12 493.762 474.766 493.762C473.411 493.762 472.044 493.638 470.664 493.391C469.297 493.143 467.982 492.766 466.719 492.258C465.469 491.75 464.297 491.099 463.203 490.305C462.109 489.51 461.152 488.566 460.332 487.473C459.525 486.379 458.887 485.129 458.418 483.723C457.962 482.316 457.734 480.741 457.734 478.996ZM468.828 478.996C468.828 480.533 468.945 481.958 469.18 483.273C469.427 484.576 469.792 485.708 470.273 486.672C470.768 487.635 471.387 488.391 472.129 488.938C472.871 489.484 473.75 489.758 474.766 489.758C475.781 489.758 476.66 489.478 477.402 488.918C478.158 488.358 478.783 487.596 479.277 486.633C479.772 485.669 480.137 484.536 480.371 483.234C480.618 481.919 480.742 480.507 480.742 478.996C480.742 477.473 480.625 476.047 480.391 474.719C480.169 473.378 479.818 472.219 479.336 471.242C478.854 470.253 478.236 469.478 477.48 468.918C476.725 468.345 475.82 468.059 474.766 468.059C473.75 468.059 472.871 468.345 472.129 468.918C471.387 469.478 470.768 470.253 470.273 471.242C469.792 472.219 469.427 473.378 469.18 474.719C468.945 476.047 468.828 477.473 468.828 478.996Z" fill="white"/>
        <path d="M432.68 488.039V471.906L427.172 468.703L439.086 464.992H442.582V488.039L447.875 493H427.387L432.68 488.039Z" fill="white"/>
<path d="M723.266 478.996C723.266 477.277 723.038 475.721 722.582 474.328C722.113 472.935 721.475 471.691 720.668 470.598C719.848 469.504 718.891 468.56 717.797 467.766C716.703 466.971 715.531 466.314 714.281 465.793C713.018 465.272 711.703 464.888 710.336 464.641C708.956 464.38 707.589 464.25 706.234 464.25C704.88 464.25 703.52 464.38 702.152 464.641C700.772 464.888 699.451 465.272 698.188 465.793C696.924 466.314 695.746 466.971 694.652 467.766C693.546 468.56 692.589 469.504 691.781 470.598C690.961 471.691 690.323 472.935 689.867 474.328C689.398 475.721 689.164 477.277 689.164 478.996C689.164 480.715 689.398 482.271 689.867 483.664C690.323 485.057 690.961 486.301 691.781 487.395C692.589 488.488 693.546 489.439 694.652 490.246C695.746 491.04 696.924 491.698 698.188 492.219C699.451 492.74 700.772 493.124 702.152 493.371C703.52 493.632 704.88 493.762 706.234 493.762C707.589 493.762 708.956 493.638 710.336 493.391C711.703 493.143 713.018 492.766 714.281 492.258C715.531 491.75 716.703 491.099 717.797 490.305C718.891 489.51 719.848 488.566 720.668 487.473C721.475 486.379 722.113 485.129 722.582 483.723C723.038 482.316 723.266 480.741 723.266 478.996ZM712.172 478.996C712.172 480.533 712.055 481.958 711.82 483.273C711.573 484.576 711.208 485.708 710.727 486.672C710.232 487.635 709.613 488.391 708.871 488.938C708.129 489.484 707.25 489.758 706.234 489.758C705.219 489.758 704.34 489.478 703.598 488.918C702.842 488.358 702.217 487.596 701.723 486.633C701.228 485.669 700.863 484.536 700.629 483.234C700.382 481.919 700.258 480.507 700.258 478.996C700.258 477.473 700.375 476.047 700.609 474.719C700.831 473.378 701.182 472.219 701.664 471.242C702.146 470.253 702.764 469.478 703.52 468.918C704.275 468.345 705.18 468.059 706.234 468.059C707.25 468.059 708.129 468.345 708.871 468.918C709.613 469.478 710.232 470.253 710.727 471.242C711.208 472.219 711.573 473.378 711.82 474.719C712.055 476.047 712.172 477.473 712.172 478.996Z" fill="white"/>
<path d="M645.984 493C645.685 492.284 645.431 491.548 645.223 490.793C645.027 490.038 644.93 489.204 644.93 488.293C644.93 487.199 645.086 486.229 645.398 485.383C645.711 484.536 646.134 483.788 646.668 483.137C647.215 482.486 647.853 481.926 648.582 481.457C649.324 480.975 650.118 480.559 650.965 480.207C651.824 479.855 652.716 479.556 653.641 479.309C654.578 479.048 655.509 478.814 656.434 478.605C657.97 478.267 659.331 477.954 660.516 477.668C661.701 477.382 662.697 477.043 663.504 476.652C664.311 476.262 664.923 475.793 665.34 475.246C665.757 474.686 665.965 473.97 665.965 473.098C665.965 472.303 665.815 471.613 665.516 471.027C665.216 470.441 664.799 469.96 664.266 469.582C663.745 469.191 663.133 468.905 662.43 468.723C661.727 468.527 660.965 468.43 660.145 468.43C659.181 468.43 658.335 468.54 657.605 468.762C656.889 468.983 656.284 469.348 655.789 469.855C655.307 470.35 654.943 471.001 654.695 471.809C654.448 472.603 654.324 473.586 654.324 474.758H645.633C645.581 474.445 645.542 474.107 645.516 473.742C645.49 473.378 645.477 473.052 645.477 472.766C645.477 471.633 645.665 470.637 646.043 469.777C646.434 468.905 646.967 468.156 647.645 467.531C648.335 466.893 649.148 466.366 650.086 465.949C651.036 465.533 652.078 465.201 653.211 464.953C654.344 464.693 655.548 464.51 656.824 464.406C658.1 464.302 659.409 464.25 660.75 464.25C663.445 464.25 665.776 464.452 667.742 464.855C669.721 465.259 671.349 465.845 672.625 466.613C673.901 467.382 674.845 468.326 675.457 469.445C676.082 470.552 676.395 471.822 676.395 473.254C676.395 474.23 676.212 475.103 675.848 475.871C675.496 476.639 675.014 477.329 674.402 477.941C673.79 478.553 673.068 479.094 672.234 479.562C671.401 480.031 670.503 480.448 669.539 480.812C668.589 481.177 667.599 481.496 666.57 481.77C665.542 482.03 664.526 482.264 663.523 482.473C662.273 482.733 661.115 483.007 660.047 483.293C658.979 483.579 658.055 483.898 657.273 484.25C656.505 484.602 655.9 485.005 655.457 485.461C655.014 485.904 654.793 486.424 654.793 487.023C654.793 487.154 654.799 487.29 654.812 487.434C654.826 487.577 654.845 487.714 654.871 487.844H667.82L675.73 480.91V493H645.984Z" fill="white"/>
<g filter="url(#filter1_d_16_3)">
<rect width="6" height="272.004" transform="matrix(-1 0 0 1 455 328)" fill="white"/>
<rect width="6" height="272.004" transform="matrix(-1 0 0 1 685 328.996)" fill="white"/>
<rect width="6" height="272.004" transform="matrix(-1 0 0 1 211 328)" fill="white"/>
</g>
<g filter="url(#filter2_dd_16_3)">
<rect width="6" height="214" transform="matrix(-1 0 0 1 33 220)" fill="#FFE606"/>
<rect x="-0.25" y="0.25" width="5.5" height="213.5" transform="matrix(-1 0 0 1 32.5 220)" stroke="black" stroke-width="0.5"/>
</g>
<g filter="url(#filter3_dd_16_3)">
<rect width="6" height="214" transform="matrix(-1 0 0 1 77 -47)" fill="#FFE606"/>
<rect x="-0.25" y="0.25" width="5.5" height="213.5" transform="matrix(-1 0 0 1 76.5 -47)" stroke="black" stroke-width="0.5"/>
</g>
<g filter="url(#filter4_dd_16_3)">
<rect width="6" height="143.099" transform="matrix(-0.781981 -0.623302 -0.623302 0.781981 77 165.74)" fill="#FFE606"/>
<rect x="-0.351321" y="0.0396699" width="5.5" height="142.599" transform="matrix(-0.781981 -0.623302 -0.623302 0.781981 76.3987 165.529)" stroke="black" stroke-width="0.5"/>
</g>
<rect width="6" height="16" transform="matrix(-1 0 0 1 253 584)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 409 584)" fill="white"/>
<path d="M355.5 584H349.5V600H355.5V584Z" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 304 584)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 490 369)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 646 369)" fill="white"/>
<path d="M592.5 369H586.5V385H592.5V369Z" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 541 369)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 253 369)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 409 369)" fill="white"/>
<path d="M355.5 369H349.5V385H355.5V369Z" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 304 369)" fill="white"/>
<path d="M616.5 477.004L630.003 483.493L629.997 470.503L616.5 477.004Z" fill="white"/>
<path d="M390.5 477.004L404.003 483.493L403.997 470.503L390.5 477.004Z" fill="white"/>
<rect width="20" height="3" transform="matrix(-1 0 0 1 462 375)" fill="white"/>
<rect width="20" height="3" transform="matrix(-1 0 0 1 692 375)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 729 583)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 780 583)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 729 368)" fill="white"/>
<rect width="6" height="16" transform="matrix(-1 0 0 1 780 368)" fill="white"/>
</g>
<rect x="-0.5" y="0.5" width="799" height="599" transform="matrix(-1 0 0 1 803 0)" stroke="black"/>
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
<filter id="filter1_d_16_3" x="201" y="328" width="488" height="281" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_3"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_3" result="shape"/>
</filter>
<filter id="filter2_dd_16_3" x="23" y="220" width="14" height="222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
<filter id="filter3_dd_16_3" x="67" y="-47" width="14" height="222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
<filter id="filter4_dd_16_3" x="-20.8856" y="162" width="101.886" height="123.64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
<linearGradient id="paint0_linear_16_3" x1="400" y1="0" x2="400" y2="600" gradientUnits="userSpaceOnUse">
<stop stop-color="#6BF1FA"/>
<stop offset="0.208025" stop-color="#B5F8FC"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<clipPath id="clip0_16_3">
<rect width="800" height="600" transform="matrix(-1 0 0 1 804 0)" fill="white"/>
</clipPath>
</defs>
</svg>
);

export default AwayFieldBackground;

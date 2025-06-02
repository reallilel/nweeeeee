import React from 'react';

const HelmetLogoSVG: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* جسم الخوذة */}
    <path
      d="M12 40C12 30 18 18 32 18C46 18 52 30 52 40V48C52 50 50 52 48 52H16C14 52 12 50 12 48V40Z"
      fill="#3B3B3B"
      stroke="#000"
      strokeWidth="2"
    />
    {/* قناع الوجه */}
    <rect
      x="20"
      y="32"
      width="24"
      height="10"
      rx="3"
      fill="#1E1E1E"
      stroke="#000"
      strokeWidth="1.5"
    />
    {/* تفاصيل إضافية */}
    <path
      d="M20 32L18 38M44 32L46 38"
      stroke="#000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default HelmetLogoSVG;

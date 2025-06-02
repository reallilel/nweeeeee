import React from 'react';

const ShieldLogoSVG: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* شكل الدرع الأساسي */}
    <path
      d="M32 4L12 14V34C12 50 24 60 32 60C40 60 52 50 52 34V14L32 4Z"
      fill="#1E40AF" /* أزرق */
      stroke="#000" 
      strokeWidth="2"
    />
    
    {/* خط أحمر مركزي مائل يعبر عن "خطر منخفض" بثقة */}
    <path
      d="M32 10L24 38L40 38L32 10Z"
      fill="#DC2626" /* أحمر */
      opacity="0.8"
    />

    {/* تفاصيل سوداء تبرز الخطوط على الدرع */}
    <path
      d="M32 4V60"
      stroke="#000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14L32 34L52 14"
      stroke="#000"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

export default ShieldLogoSVG;

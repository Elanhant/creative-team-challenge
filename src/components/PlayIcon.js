import React from 'react';

export default function PlayIcon({ color = '#000', ...rest }) {
  return (
    <svg {...rest} width="24px" height="24px" viewBox="0 0 24 24">
      <defs>
        <mask id="myMask">
          <rect width="100%" height="100%" fill="#fff" />
          <polygon points="8 5 8 19 19 12" />
        </mask>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle r={12} cx={12} cy={12} mask="url(#myMask)" fill={color} />
      </g>
    </svg>
  );
}

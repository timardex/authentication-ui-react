import React from 'react';

export const Exclamation: React.FC<{}> = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14">
      <g fill="none" fillRule="evenodd">
        <g fill="#EBEBEB">
          <path
            d="M2.89 2.863L2.89 7.912 3.789 7.994 3.789 8.81.171 8.81.171 7.994 1.058 7.912 1.058 3.833.195 3.75.195 2.958zM1.827.038c.674 0 1.087.33 1.087 1.028 0 .603-.33 1.04-1.111 1.04-.863 0-1.1-.543-1.1-1.028 0-.556.308-1.04 1.124-1.04"
            transform="translate(5.09 2.545)"
          />
        </g>
        <circle cx="7" cy="7" r="7" stroke="#47C8FF" opacity=".6" />
      </g>
    </svg>
  );
};

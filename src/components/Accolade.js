import React from 'react';
import { css } from 'emotion';

const baseClass = css`
  text-align: center;
  color: #6C6C6C;
  font-weight: 700;
  font-size: 0.90rem;
`;

const textClass = css`
  margin-top: 0.6rem;
`;

export default function Accolade({ name, awardText, imgSrc }) {
  return (
    <figure className={baseClass}>
      <img src={imgSrc} alt={name} />
      <figcaption className={textClass}>
        {awardText}
      </figcaption>
    </figure>
  );
}

import React from 'react';
import { css, cx } from 'emotion';
import { learningColor } from '../shared/css/colors';
import { mobileMedia } from '../shared/css/screenSizes';

const flexClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const reverseClass = css`
  flex-direction: column-reverse;
  
  ${mobileMedia} {
    flex-direction: column;
  }
`;

const baseClass = css`
  ${flexClass};
  position: relative;
  text-align: center;
  font-size: 2rem;
  color: ${learningColor};
  flex-basis: 400px;
  
  ${mobileMedia} {
    padding-top: 2rem;
    font-size: 1.6rem;
    flex-basis: auto;
    max-width: 260px;
  }
`;

const textClass = css`
  ${flexClass};
  margin-top: 2rem;
  
  ${mobileMedia} {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding-bottom: 1rem;
    padding-top: 1.5rem;
  }
`;

const textReverseClass = css`
  margin-top: 0;
  margin-bottom: 2rem;
  
  ${mobileMedia} {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const quoteClass = css`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
  max-width: 84%;
  margin: 0 auto;
`;

const personClass = css`
  font-size: 1rem;
  margin: 0;
  
  ${mobileMedia} {
    margin-top: 1rem;
  }
`;

const quoteMarkClass = css`
  font-size: 5rem;
  height: 3rem;
  font-weight: 900;
  margin: 0;
  order: 3;
  
  ${mobileMedia} {
    font-size: 3rem;
    height: 2rem;
  }
`;

const quoteMarkReverseClass = css`
  order: -1;
  
  ${mobileMedia} {
    order: 3;
  }
`;

export default function PersonQuote({
  name,
  position,
  photoSrc,
  quote,
  reverse,
}) {
  return (
    <div className={cx(baseClass, reverse && reverseClass)}>
      <img src={photoSrc} alt={name} width="100%" />
      <div className={cx(textClass, reverse && textReverseClass)}>
        <p className={cx(quoteMarkClass, reverse && quoteMarkReverseClass)}>
          "
        </p>
        <p className={quoteClass}>
          {quote}
        </p>
        <p className={personClass}>
          {name}, {position}
        </p>
      </div>
    </div>
  );
}

import React from "react"
import { css, cx } from 'emotion';
import { learningColor } from '../shared/css/colors';
import '../shared/css/global.css';
import PlayIcon from '../components/PlayIcon';
import { mobileMedia } from '../shared/css/screenSizes';

const baseClass = css`
  text-transform: uppercase;
  margin-top: 9.7rem;
  margin-bottom: 13rem;
  color: #fff;
  font-size: 6.8rem;
  line-height: 1.07;
  
  ${mobileMedia} {
    font-size: 3rem;
    margin: 0;
    padding: 4rem 5% 5rem;
  }
`;

const subtitleClass = css`
  color: ${learningColor};
  font-size: 1rem;
  display: block;
  max-width: 480px;
  margin: 0.7rem auto 0;
  font-weight: 600;
  letter-spacing: 0.03rem;
`;

const playBtnClass = css`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  
  ${mobileMedia} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const playIconClass = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PlayButton = (
  <span className={playBtnClass}>
    <PlayIcon color={learningColor} className={playIconClass} />
  </span>
);

export default function Headline({
  className,
}) {
  return (
    <h1 className={cx(baseClass, className)}>
      Realize <i>your</i> <br />
      <span aria-label="potential">
        <span aria-hidden="true">p{PlayButton}tential</span>
      </span>
      <br />
      <small className={subtitleClass}>
        Cloud-based applications to recruit, train, manage, and connect people across your organization
      </small>
    </h1>
  );
}

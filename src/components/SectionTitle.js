import React from 'react';
import { css, cx } from 'emotion';
import { gray, learningColor } from '../shared/css/colors';

const titleClass = css`
  font-size: 1rem;
  font-weight: 900;
  color: ${gray};
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.1rem;
`;

const subtitleClass = css`
  font-size: 2rem;
  font-weight: 300;
  color: ${learningColor};
  margin: 1rem 0 1.6rem;
  letter-spacing: 0.1rem;
`;

export default function SectionTitle({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
}) {
  return (
    <React.Fragment>
      <h2 className={cx(titleClass, titleClassName)}>{title}</h2>
      <h3 className={cx(subtitleClass, subtitleClassName)}>{subtitle}</h3>
    </React.Fragment>
  );
}

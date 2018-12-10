import React from 'react';
import { css } from 'emotion';
import SectionTitle from './SectionTitle';
import { mobileMedia, tabletMedia } from '../shared/css/screenSizes';

const perksBlockClass = css`
  display: flex;
  text-align: left;
  
  ${mobileMedia} {
    flex-direction: column;
  }
`;

const mainContentClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
  
  ${mobileMedia} {
    padding: 4rem 1rem;
  }
`;

const textContainerClass = css`
  max-width: 380px;
`;

const photosContainerClass = css`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 627px;
  
  ${tabletMedia} {
    display: block;
    flex-basis: auto;
    text-align: center;
  }
`;

const mainPhotoClass = css`
  ${tabletMedia} {
    max-width: 50vw;
    height: auto;
  }
  
  ${mobileMedia} {
    max-width: 100%;
  }
`;

const secondaryPhotoContainerClass = css`
  margin-top: 8px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  
  & > img + img {
    margin-left: 8px;
  }
  
  ${tabletMedia} {
    display: none;
  }
`;

export default function PerksBlock({
  title,
  subtitle,
  content,
  mainImage,
  secondaryImage1,
  secondaryImage2,
  style,
}) {
  return (
    <div className={perksBlockClass} style={style}>
      <div className={mainContentClass}>
        <div className={textContainerClass}>
          <SectionTitle
            title={title}
            subtitle={subtitle}
          />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      <aside className={photosContainerClass}>
        <img alt="" {...mainImage} className={mainPhotoClass} />
        <div className={secondaryPhotoContainerClass}>
          <img alt="" {...secondaryImage1} />
          <img alt="" {...secondaryImage2} />
        </div>
      </aside>
    </div>
  );
}

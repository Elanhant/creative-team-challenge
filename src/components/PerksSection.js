import React from 'react';
import { css, cx } from 'emotion';
import faker from 'faker';
import { Transition } from 'react-spring';
import { learningColor } from '../shared/css/colors';
import { mobileMedia, tabletMedia } from '../shared/css/screenSizes';
import Slider from './Slider';
import PerksBlock from './PerksBlock';

const baseClass = css`
  align-self: stretch;
  background-color: #ffffff;
  margin-bottom: 4rem;
  position: relative;
  min-height: 672px;
  
  ${tabletMedia} {
    min-height: auto;
  }
`;

const perks = [
  {
    title: 'The Culture',
    subtitle: 'Perks of a Lifetime',
    content: `
          <p>${faker.lorem.sentences(3)}</p>
          <p>${faker.lorem.sentences(3)}</p>
          <p>${faker.lorem.sentences(3)}</p>`,
    mainImage: {
      src: '/images/halloween.jpg',
      alt: 'Halloween',
    },
    secondaryImage1: {
      src: '/images/anniversary.jpg',
      alt: 'Anniversary',
    },
    secondaryImage2: {
      src: '/images/cloud-racers.jpg',
      alt: 'Cloud Racers',
    },
  },
  {
    title: 'Lending a hand',
    subtitle: 'Community Outreach',
    content: `
          <p>${faker.lorem.sentences(3)}</p>
          <p>${faker.lorem.sentences(3)}</p>
          <p>${faker.lorem.sentences(3)}</p>`,
    mainImage: {
      src: 'https://picsum.photos/627/430?image=0',
    },
    secondaryImage1: {
      src: 'https://picsum.photos/310/234?image=1',
    },
    secondaryImage2: {
      src: 'https://picsum.photos/310/234?image=2',
    },
  },
  {
    title: 'Because not everyone is a 9-5er',
    subtitle: 'Flexible Work Schedule',
    content: `
          <p>${faker.lorem.sentences(3)}</p>
          <p>${faker.lorem.sentences(3)}</p>
          <p>${faker.lorem.sentences(3)}</p>`,
    mainImage: {
      src: 'https://picsum.photos/627/430?image=6',
    },
    secondaryImage1: {
      src: 'https://picsum.photos/310/234?image=7',
    },
    secondaryImage2: {
      src: 'https://picsum.photos/310/234?image=8',
    },
  },
  {
    title: 'Build your startup and learn from the best',
    subtitle: 'Cornerstone Accelerator',
    content: `
          <p>${faker.lorem.sentences(3)}</p>
          <p>${faker.lorem.sentences(3)}</p>
          <p>${faker.lorem.sentences(3)}</p>`,
    mainImage: {
      src: 'https://picsum.photos/627/430?image=9',
    },
    secondaryImage1: {
      src: 'https://picsum.photos/310/234?image=10',
    },
    secondaryImage2: {
      src: 'https://picsum.photos/310/234?image=11',
    },
  },
];

const sliderBaseClass = css`
  position: absolute;
  top: 1rem;
  left: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  
  & > li {
    margin: 2px;
  }
  
  ${mobileMedia} {
    flex-direction: row;
  }
`;

const sliderDotClass = css`
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: ${learningColor};
  opacity: .5;
  padding: 5px;
  height: 10px;
  width: 10px;
  cursor: pointer;
`;

const sliderDotActiveClass = css`
  opacity: 1;
`;

export default function PerksSection() {
  return (
    <section className={baseClass}>
      <Slider items={perks}>
        {(currentSlide, setSlide) => {
          return (
            <React.Fragment>
              <ol className={sliderBaseClass}>
                {perks.map((_, idx) => {
                  return (
                    <li key={idx}>
                      <button
                        className={cx(
                          sliderDotClass,
                          idx === currentSlide && sliderDotActiveClass,
                        )}
                        onClick={() => setSlide(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    </li>
                  );
                })}
              </ol>
              <Transition
                items={currentSlide}
                from={{ opacity: 0, position: 'absolute' }}
                enter={{ opacity: 1, position: 'static' }}
                leave={{ opacity: 0, position: 'absolute' }}
              >
                {(slide) => {
                  return (props) => {
                    return (
                      <PerksBlock {...perks[slide]} style={props} />
                    )
                  };
                }}
              </Transition>
            </React.Fragment>
          );
        }}
      </Slider>
    </section>
  );
}

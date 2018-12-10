import React from 'react';
import fetch from 'isomorphic-fetch';
import { css, cx } from 'emotion';
import { perfomanceColor } from '../shared/css/colors';
import { tabletMedia } from '../shared/css/screenSizes';

const baseClass = css`
  margin: 0 -8px; // adjust for image side margins
`;

const imageContainerClass = css`
  position: relative;
  margin: 6px;
  display: inline-block;
  
  &:before {
    content: ' ';
    color: #fff;
    text-transform: uppercase;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .57);
    opacity: 0;
    transition: opacity .2s ease;
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  &:hover > span {
    visibility: visible;
  }
  
  ${tabletMedia} {
    &:nth-of-type(n + 9) {
      display: none;
    }
  }
`;


const instagramTextClass = css`
  text-transform: uppercase;
  color: ${perfomanceColor};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  visibility: hidden;
`;


export default class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  fetchPhotos() {
    fetch('https://picsum.photos/list')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const count = res.length;
        const maxImages = 10;
        const start = randomIntBetween(0, count - 1 - maxImages);
        this.setState({
          photos: res.slice(start, start + maxImages).map(extractId),
        });
      });
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  render() {
    const { size = 220 } = this.props;

    return (
      <section className={baseClass}>
        {this.state.photos.map((photoId) => {
          return (
            <a
              href="https://www.instagram.com/cornerstoneondemand"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(imageContainerClass, css({ width: size, height: size }))}
            >
              <img
                src={`https://picsum.photos/${size}/${size}?image=${photoId}`}
                alt="Instagram"
              />
              <span className={instagramTextClass}>
                View on<br />Instagram
              </span>
            </a>
          );
        })}
      </section>
    );
  }
}

/** **************************************
 * HELPERS
 ****************************************/

function extractId({ id }) {
  return id;
}

function randomIntBetween(min, max) {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

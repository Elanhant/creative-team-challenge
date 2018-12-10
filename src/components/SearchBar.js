import React from 'react';
import faker from 'faker';
import { css } from 'emotion';
import { blue, learningColor } from '../shared/css/colors';
import { mobileMedia } from '../shared/css/screenSizes';

const baseClass = css`
  background-color: ${learningColor};
  width: 100%;
  text-align: left;
  position: relative;
  box-sizing: border-box;
  color: #fff;
`;

const inputClass = css`
  font-size: 2rem;
  background-color: ${learningColor};
  border: none;
  color: #fff;
  font-weight: 100;
  width: 100%;
  padding: 24px 32px;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(255, 255, 255, .7);
  }
  
  &:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }
  
  ${mobileMedia} {
    font-size: 1.6rem;
    padding: 16px;
  }
`;

const matchesClass = css`
  position: absolute;
  top: 100%;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 16px 32px;
  z-index: 100;
  background-color: ${learningColor};
  
  ${mobileMedia} {
    padding: 0 16px 16px;
  }
`;

const linkClass = css`
  font-weight: 300;
  font-size: 2rem;
  display: block;
  padding: 16px 0;

  &, &:visited, &:active {
    color: #fff;
    text-decoration: none;
  }
  
  &:hover {
    color: ${blue};
  }
  
  ${mobileMedia} {
    font-size: 1.6rem;
  }
`;

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      positions: Array(100).fill(1).map(createFakePosition),
      matches: [],
      value: '',
      showDropdown: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.matchPositions = this.matchPositions.bind(this);
    this.renderMatch = this.renderMatch.bind(this);
  }

  handleFocus() {
    this.setState({
      showDropdown: true,
    });
  }

  handleBlur() {
    this.setState({
      showDropdown: false,
    });
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      value,
      matches: value ? this.state.positions
        .filter((position) => {
          return position.includes(value);
        })
        .slice(0, 10) : [],
    });
  }

  matchPositions(position) {
    return position.includes(this.state.value);
  }

  renderMatch(position) {
    return (
      <li key={position}>
        <a href="#" className={linkClass}>
          {position}
        </a>
      </li>
    );
  }

  render() {
    const { matches, showDropdown } = this.state;

    return (
      <div className={baseClass}>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder="My perfect job is..."
            className={inputClass}
          />
        </div>
        {showDropdown && matches.length > 0 && (
          <ul className={matchesClass}>
            {matches.map(this.renderMatch)}
          </ul>
        )}
      </div>
    );
  }
}

/** **************************************
 * HELPERS
 ****************************************/

function createFakePosition() {
  return `${faker.name.jobTitle()} (${faker.address.city()}, ${faker.address.country()})`;
}

import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: props.items && props.items.length > 0 ? 0 : null,
    };

    this.setSlide = this.setSlide.bind(this);
  }

  componentDidMount() {
    if (this.props.items && this.props.items.length > 0) {
      this.setSlide(0);
    }
  }

  setSlide(slide) {
    this.setState({
      currentSlide: slide,
    });
  }

  componentDidUpdate({ items: oldItems }) {
    const { items } = this.props;

    if (oldItems !== items) {
      if (!items || items.length === 0) {
        this.setSlide(null);
      } else if (this.state.currentSlide > items.length - 1) {
        this.setSlide(items.length - 1);
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children(this.state.currentSlide, this.setSlide)}
      </React.Fragment>
    );
  }
}

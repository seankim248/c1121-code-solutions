import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getSliderClass() {
    const { toggle } = this.state;
    if (toggle) {
      return 'slider-active';
    } else {
      return '';
    }
  }

  getDotClass() {
    const { toggle } = this.state;
    if (toggle) {
      return 'dot-active';
    } else {
      return '';
    }
  }

  handleClick() {
    const { toggle } = this.state;
    if (toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  }

  render() {
    const sliderClass = this.getSliderClass();
    const dotClass = this.getDotClass();
    return (
      <div className={`slider ${sliderClass}`}>
        <div className={`dot ${dotClass}`} onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default ToggleSwitch;

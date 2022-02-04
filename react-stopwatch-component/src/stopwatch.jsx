import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isOn: false
    };
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleWatchClick = this.handleWatchClick.bind(this);
  }

  handleIconClick() {
    if (!this.state.isOn) {
      this.timerID = setInterval(() => {
        this.setState({
          isOn: true,
          seconds: this.state.seconds + 1
        });
      }, 1000);
    } else if (this.state.isOn) {
      this.setState({ isOn: false });
      clearInterval(this.timerID);
    }
  }

  handleWatchClick() {
    if (!this.state.isOn) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    const iconClass = this.state.isOn ? 'fa-pause' : 'fa-play';
    return (
      <div className="container">
        <div onClick={this.handleWatchClick} className="counter">
          <h1>{this.state.seconds}</h1>
        </div>
        <i onClick={this.handleIconClick} className={`fas ${iconClass}`}></i>
      </div>
    );
  }
}

export default StopWatch;

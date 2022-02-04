import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  timer() {
    if (!this.state.isOn) {
      setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      this.setState({ seconds: this.state.seconds });
    }
  }

  render() {
    const iconClass = this.state.isOn ? 'fa-pause' : 'fa-play';
    return (
      <div className="container">
        <div className="counter">
          <h1>{this.state.seconds}</h1>
        </div>
        <i onClick={() => {
          this.handleClick();
          this.timer();
        }} className={`fas ${iconClass}`}></i>
      </div>
    );
  }
}

export default StopWatch;

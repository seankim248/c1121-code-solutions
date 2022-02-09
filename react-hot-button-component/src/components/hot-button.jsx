import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    if (this.state.count < 4) {
      return <button className="cold" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.count < 7) {
      return <button className="cool" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.count < 10) {
      return <button className="warm" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.count < 13) {
      return <button className="hot" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.count < 16) {
      return <button className="sizzling" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.count > 15) {
      return <button className="scorching" onClick={this.handleClick}>Hot Button</button>;
    }
  }
}

export default HotButton;

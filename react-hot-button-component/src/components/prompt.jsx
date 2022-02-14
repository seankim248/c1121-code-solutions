import React from 'react';

export default class Prompt extends React.Component {
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
    return (
      <div className='container'>
        <div className='header-content'>
          <i className="far fa-keyboard"></i>
          <h1 className='title'>typicaltyper</h1>
          <p className='time-options'>
            time: <span className='selected time-options-number'>15</span> <span className='time-options-number'>30</span> <span className='time-options-number'>45</span> <span className='time-options-number'>60</span> <span className='time-options-number'>120</span>
          </p>
        </div>
        <div className='main-content' onKeyPress={this.handleKeyPress}>
          <h1 className='counter selected'>15</h1>
          <h1 className='prompt'></h1>
        </div>
        <div className="footer-content">
          <h3>Join Room</h3>
          <h3>Create Room</h3>
        </div>
      </div>
    );
  }
}

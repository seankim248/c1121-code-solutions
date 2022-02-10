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
      <div className='bg-charcoal-black h-screen'>
        <div className='max-w-sm mx-auto'>
          <div>
            <i className="fa-solid fa-keyboard"></i>
            <h1 className='text-5xl text-golden-yellow font-light font-dongle inline-block'>typicaltyper</h1>
            <p className='text-3xl text-charcoal-gray font-dongle'>
              time: <span className='text-golden-yellow'>15</span> <span>30</span> <span>45</span> <span>60</span> <span>120</span>
            </p>
          </div>
          <div className='mt-52'>
            <h1 className='text-5xl text-charcoal-gray font-light font-dongle justify-center content-center'> <span className='block text-golden-yellow'>15</span>Once you have tested flight, you will forever walk the earth with your eyes</h1>
          </div>
        </div>
      </div>
    );
  }
}

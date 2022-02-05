import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      interval: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.tagName === 'I') {
      clearInterval(this.state.interval);
      this.setState({
        interval: setInterval(() => {
          if (this.state.current >= this.props.data.length) {
            this.setState({ current: 1 });
          } else {
            this.setState({ current: this.state.current + 1 });
          }
        }, 3000)
      });
      if (event.target.className === 'fas fa-chevron-right') {
        this.setState({ current: this.state.current + 1 });
        if (this.state.current >= this.props.data.length) {
          this.setState({ current: 1 });
        }
      } else if (event.target.className === 'fas fa-chevron-left') {
        this.setState({ current: this.state.current - 1 });
        if (this.state.current <= 1) {
          this.setState({ current: this.props.data.length });
        }
      } else if (event.target.className.includes('fa-circle')) {
        this.setState({ current: Number(event.target.getAttribute('id')) });
      }
    }
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        if (this.state.current >= this.props.data.length) {
          this.setState({ current: 1 });
        } else {
          this.setState({ current: this.state.current + 1 });
        }
      }, 3000)
    });
  }

  render() {
    const imageUrl = this.props.data[this.state.current - 1];
    let dotClass = '';
    const dots = this.props.data.map(image => {
      if (image.id === this.state.current) {
        dotClass = 'fas fa-circle';
      } else {
        dotClass = 'far fa-circle';
      }
      return <i onClick={this.handleClick} className={dotClass} id={image.id} key={image.id}></i>;
    });
    return (
      <div className='container'>
        <div className='main-content'>
          <i onClick={this.handleClick} className='fas fa-chevron-left'></i>
          <img src={imageUrl.url} />
          <i onClick={this.handleClick} className='fas fa-chevron-right'></i>
        </div>
        <div className='dots'>
          {dots}
        </div>
      </div>
    );
  }
}

import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };

    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleIconClick() {
    this.setState({ isOn: true });
  }

  handleLinkClick() {
    this.setState({ isOn: false });
  }

  getDrawDisplayClass() {
    const { isOn } = this.state;
    if (isOn) {
      return '';
    } else if (!isOn) {
      return 'hidden';
    }
  }

  getIconDisplayClass() {
    const { isOn } = this.state;
    if (isOn) {
      return 'hidden';
    } else if (!isOn) {
      return '';
    }
  }

  render() {
    const drawDisplayClass = this.getDrawDisplayClass();
    const iconDisplayClass = this.getIconDisplayClass();
    return (
      <div className='container'>
        <i className={`fas fa-bars ${iconDisplayClass}`} onClick={this.handleIconClick}></i>
        <div className={`background ${drawDisplayClass}`} onClick={this.handleLinkClick}></div>
        <nav className={`draw-container ${drawDisplayClass}`}>
          <h1 onClick={this.handleLinkClick}>Menu</h1>
          <ul>
            <li onClick={this.handleLinkClick}>About</li>
            <li onClick={this.handleLinkClick}>Get Started</li>
            <li onClick={this.handleLinkClick}>Sign In</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default AppDrawer;

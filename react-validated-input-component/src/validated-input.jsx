import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  getInvalidClass() {
    const { value } = this.state;
    if (value.length < 8 && value !== '') {
      return '';
    } else {
      return 'hidden';
    }
  }

  getValidClass() {
    const { value } = this.state;
    if (value.length > 7) {
      return '';
    } else {
      return 'hidden';
    }
  }

  render() {
    const invalidClass = this.getInvalidClass();
    const validClass = this.getValidClass();
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" value={this.state.value} onChange={this.handleChange} />
        <i className={`fas fa-times ${invalidClass}`}></i>
        <i className={`fas fa-check ${validClass}`}></i>
        <p className={invalidClass}>A password is required.</p>
      </form>
    );
  }
}

export default ValidatedInput;

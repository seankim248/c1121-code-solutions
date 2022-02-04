import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valid: 'hidden',
      invalid: 'hidden'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    if (value === '' || value.length < 8) {
      this.setState({ invalid: '' });
      this.setState({ valid: 'hidden' });
    } else if (value.length > 7) {
      this.setState({ valid: '' });
      this.setState({ invalid: 'hidden' });
    }
  }

  getInvalidClass() {
    const { value } = this.state;
    if (value === '' || value.length < 8) {
      return 'hidden';
    } else {
      return '';
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
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" value={this.state.value} onChange={this.handleChange} />
        <i className={`fas fa-times ${this.state.invalid}`}></i>
        <i className={`fas fa-check ${this.state.valid}`}></i>
        <p className={this.state.invalid}>A password is required.</p>
      </form>
    );
  }
}

export default ValidatedInput;

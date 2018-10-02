import * as React from 'react';

export default class HandlerBinding extends React.Component {
  doctor = 'who?';

  constructor(props) {
    super(props);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    console.log('handleClick1', `Doctor: ${this && this.doctor}`);
  }

  handleClick2 = () => {
    console.log('handleClick2', `Doctor: ${this && this.doctor}`);
  };

  handleClick3() {
    console.log('handleClick3', `Doctor: ${this && this.doctor}`);
  }

  render() {
    return (
      <div>
        <input type="submit" value="Button 1" onClick={this.handleClick1} />
        <br />
        <input type="submit" value="Button 2" onClick={this.handleClick2} />
        <br />
        <input type="submit" value="Button 3" onClick={this.handleClick3} />
        <br />
        <input
          type="submit"
          value="Button 4"
          onClick={function() {
            console.log('handleClick4', `Doctor: ${this && this.doctor}`);
          }}
        />
        <br />
        <input
          type="submit"
          value="Button 5"
          onClick={() => {
            console.log('handleClick5', `Doctor: ${this && this.doctor}`);
          }}
        />
        <br />
      </div>
    );
  }
}

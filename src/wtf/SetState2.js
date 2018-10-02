import * as React from 'react';

export default class SetState1 extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    const {count} = this.state;
    this.setState({
      count: count + 1,
    });
  };

  handleDoubleIncrement = () => {
    this.handleIncrement();
    this.handleIncrement();
  };

  render() {
    const {count} = this.state;
    return (
      <div>
        <input value="Increment" type="submit" onClick={this.handleIncrement} />
        <br />
        <input
          value="Double Increment"
          type="submit"
          onClick={this.handleDoubleIncrement}
        />
        <br />
        Count: {count}
      </div>
    );
  }
}

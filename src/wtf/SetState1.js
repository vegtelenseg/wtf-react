import * as React from 'react';

export default class SetState1 extends React.Component {
  state = {
    updated: false,
  };

  componentDidMount() {
    console.log('Updated', {updated: this.state.updated});
    this.setState({updated: true});
    console.log('Updated', {updated: this.state.updated});
  }

  render() {
    return null;
  }
}

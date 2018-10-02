import * as React from 'react';

import Witness from './Witness';

const witness = new Witness();

export default class WhenIsRenderCalled extends React.Component {
  state = {
    updated: false,
  };

  componentDidMount() {
    witness.cdm();

    setTimeout(() => {
      this.setState({updated: true});
    }, 2000);
  }

  render() {
    witness.surprise('render');

    const {updated} = this.state;
    return <div>Updated: {updated ? 'True' : 'False'}</div>;
  }
}

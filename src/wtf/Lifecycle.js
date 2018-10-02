import * as React from 'react';

import Witness from './Witness';

const witness = new Witness();

export default class WhenIsRenderCalled extends React.Component {
  constructor(props) {
    super(props);
    witness.info('constructor');
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    witness.info('getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    witness.info('cdm');
  }

  render() {
    witness.info('render');
    return <div>Lifecycle</div>;
  }
}

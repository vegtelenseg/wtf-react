import * as React from 'react';

import Witness from './Witness';

const witness = new Witness();

export default class WhoThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    witness.info('constructor', this);
  }

  static getDerivedStateFromProps(props, state) {
    witness.info('getDerivedStateFromProps', this);
    return state;
  }

  componentDidMount() {
    witness.info('componentDidMount', this);
  }

  render() {
    witness.info('render', this);
    return <div>Lifecycle</div>;
  }
}

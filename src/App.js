import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import WhenIsRenderCalled from './wtf/WhenIsRenderCalled';
import Lifecycle from './wtf/Lifecycle';
import WhoThis from './wtf/WhoThis';
import HandlerBinding from './wtf/HandlerBinding';
import IndicesAsKeys from './wtf/IndicesAsKeys';
import SetState1 from './wtf/SetState1';
import SetState2 from './wtf/SetState2';

export default () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">When Is Render Called</Link>
        </li>
        <li>
          <Link to="/lifecycle">Lifecycle</Link>
        </li>
        <li>
          <Link to="/who-this">Who This</Link>
        </li>
        <li>
          <Link to="/handler-binding">Handler Binding</Link>
        </li>
        <li>
          <Link to="/indices-as-keys">Indices as Keys</Link>
        </li>
        <li>
          <Link to="/set-state1">Set State1</Link>
        </li>
        <li>
          <Link to="/set-state2">Set State2</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/" component={() => null} />
        <Route exact path="/render-called" component={WhenIsRenderCalled} />
        <Route exact path="/lifecycle" component={Lifecycle} />
        <Route exact path="/who-this" component={WhoThis} />
        <Route exact path="/handler-binding" component={HandlerBinding} />
        <Route exact path="/indices-as-keys" component={IndicesAsKeys} />
        <Route exact path="/set-state1" component={SetState1} />
        <Route exact path="/set-state2" component={SetState2} />

        <Route component={() => <div>You must be lost</div>} />
      </Switch>
    </div>
  </Router>
);

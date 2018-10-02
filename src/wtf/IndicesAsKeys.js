/**
 * https://reactjs.org/docs/lists-and-keys.html#keys
 */
import * as React from 'react';

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt.toISOString()}</label>
    </td>
  </tr>
);

export default class IndicesAsKeys extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const todoCounter = 1;
    this.state = {
      todoCounter: todoCounter,
      list: [
        {
          id: todoCounter,
          createdAt: date,
        },
      ],
    };
  }

  addToEnd = () => {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [...this.state.list, {id: nextId, createdAt: date}];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  };

  addToStart = () => {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [{id: nextId, createdAt: date}, ...this.state.list];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  };

  render() {
    return (
      <div>
        <code>key=index</code>
        <br />
        <button onClick={this.addToStart}>Add New to Start</button>
        <button onClick={this.addToEnd}>Add New to End</button>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th />
              <th>created at</th>
            </tr>
            {this.state.list.map((todo, index) => (
              <ToDo key={index} {...todo} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

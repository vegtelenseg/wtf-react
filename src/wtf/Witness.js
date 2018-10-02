import 'colors';

export default class Witness {
  info(...args) {
    console.log(...args);
  }

  surprise(...args) {
    console.log(...args.map((arg) => arg.green));
  }

  wtf(...args) {
    console.log(...args.map((arg) => arg.red));
  }

  cdm() {
    console.log('componentDidMount');
  }

  render() {
    console.log('componentDidMount');
  }
}

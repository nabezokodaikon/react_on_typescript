import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IState {
  date: Date;
}

class Clock extends React.Component<{}, IState> {

  timerID: number | null;

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      window.clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Clock />
        <Clock />
        <Clock />
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

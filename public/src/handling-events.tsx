import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IState {
  isToggleOn: boolean;
}

class Toggle extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState: IState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById("root")
);

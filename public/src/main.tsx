import * as React from 'react';
import * as ReactDOM from 'react-dom';

const ThemeContext = React.createContext('light');

interface IButtonProps {
  theme: React.ContextType<typeof ThemeContext>;
}

class Button extends React.Component<IButtonProps> {
  constructor(props: IButtonProps) {
    super(props);
  }

  render() {
    return (
      <button>Button</button>
    );
  }
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context}></Button>
  }
}

function Toolbar() {
  return (
    <>
      <ThemedButton />
    </>
  );
}

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ ThemeContext.Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

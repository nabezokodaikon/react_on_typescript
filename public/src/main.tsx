import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';


interface IToolbarProps {
  changeTheme: React.MouseEventHandler<HTMLButtonElement>;
}

interface IAppProps {
  changeTheme?: React.MouseEventHandler<HTMLButtonElement>;
}
interface IAppState {
  theme: { foreground: string; background: string; };
}

function Toolbar(props: IToolbarProps) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => {
        theme:
          state.theme === themes.dark
            ? themes.light : themes.dark
      });

    };
  }

  toggleTheme = () => {}

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton onClick={this.props.changeTheme}>
            Change Theme
          </ThemedButton>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

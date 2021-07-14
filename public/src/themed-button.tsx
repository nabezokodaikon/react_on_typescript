import * as React from 'react';
import {ThemeContext} from './theme-context';

interface IThemedButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

class ThemedButton extends React.Component<IThemedButtonProps> {
  render() {
    const props = this.props;
    const theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;

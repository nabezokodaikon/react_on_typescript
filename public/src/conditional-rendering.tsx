import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IGreetingProps {
  isLoggedIn: boolean;
}

interface ILoginControlProps {
}

interface ILoginControlState {
  isLoggedIn: boolean;
}

interface ILoginButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props: IGreetingProps) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function LoginButton(props: ILoginButtonProps) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props: ILoginButtonProps) {
  return (
    <button onClick={props.onClick}>
      Logout  
    </button>
  );
}

class LoginControl extends React.Component<{}, ILoginControlState> {
  constructor(props: any) {
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
      </>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById("root")
);

interface IMailboxProps {
  unreadMessages: Array<string>;
}

class Mailbox extends React.Component<IMailboxProps> {
  constructor(props: IMailboxProps) {
    super(props);
  }

  render() {
    const length = this.props.unreadMessages.length;
    return (
      <>
        <h1>Hello!</h1>
        {
          length > 0 &&
            <h2>
              You have {length} unread messages,
            </h2>
        }
      </>
    );
  }
}

const messages: string[] = ["React", "Re: React", "Re:Re: React"];

// ReactDOM.render(
  // <Mailbox unreadMessages={messages} />,
  // document.getElementById("root")
// );

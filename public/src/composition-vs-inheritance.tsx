import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IFancyBorderProps {
  color: string;
  children?: React.ReactNode;
}

interface IDialogProps {
  title: string;
  message: string;
  children?: React.ReactNode;
}

interface ISignUpDialogProps {
}

interface ISignUpDialogState {
  login: string;
}

function FancyBorder(props: IFancyBorderProps) {
  return (
    <div className={`FancyBorder FancyBorder- ${props.color}`}>
      {props.children}
    </div>
  );
}

function Dialog(props: IDialogProps) {
  return (
    <FancyBorder color="blue">
      <h1>
        {props.title}
      </h1>
      <p>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component<ISignUpDialogProps, ISignUpDialogState> {
  constructor(props: ISignUpDialogProps) {
    super(props);
    this.state = { login: "" };    
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({login: e.target.value});
  }

  handleSignUp(e: React.MouseEvent<HTMLInputElement>) {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange}
        />
        <button onClick={this.handleSignUp}> 
        </button>
          Sign Me Up!
      </Dialog>
    );
  }
}



function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!"
    />
  );
}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById("root")
);

interface ISplitPaneProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

function SplitPane(props: ISplitPaneProps) {
  return (
    <>
      <div>
        {props.left}
      </div>
      <div>
        {props.right}
      </div>
    </>
  );
}

function Contacts() {
  return <>Contacts</>
}

function Chat() {
  return <>Chat</>
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

// ReactDOM.render(
  // <App />,
  // document.getElementById("root")
// );

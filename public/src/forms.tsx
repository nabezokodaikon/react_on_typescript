import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface NameFormProps {
}

interface NameFormState {
  value: string;
}

class NameForm extends React.Component<NameFormProps, NameFormState> {
  constructor(props: NameFormProps) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert(`A name was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

interface EssayFormProps {}
interface EssayFormState {
  value: string;
}

class EssayForm extends React.Component<EssayFormProps, EssayFormState> {
  constructor(props: EssayFormProps) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element."
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert(`An essay was submitted: ${this.state.value}`);
    event.preventDefault();
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

interface FlavorFormState {
  value: string;
}

class FlavorForm extends React.Component<{}, FlavorFormState> {
  constructor(props: any) {
    super(props);
    this.state = {value: "coconut"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert(`Your favorite flavor is: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pic your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

interface IReservationState {
  isGoing: boolean;
  numberOfGuests: number;
}

class Reservation extends React.Component<{}, IReservationState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    if (target.type === "checkbox") {
      this.setState({isGoing: target.checked});
    } else {
      this.setState({numberOfGuests: parseInt(target.value)});
    }
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById("root")
);

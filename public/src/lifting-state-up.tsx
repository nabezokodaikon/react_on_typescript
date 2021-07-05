import * as React from 'react';
import * as ReactDOM from 'react-dom';

enum SCALE_NAMES {
  c = "Celsius",
  f = "Fahrenheit",
}

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (_: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

interface ICalculatorState {
  temperature: string;
  scale: SCALE_NAMES;
}

class Calculator extends React.Component<{}, ICalculatorState> {
  constructor(props: any) {
    super(props);
    this.state = {temperature: "", scale: SCALE_NAMES.c};
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature: string) {
    this.setState({scale: SCALE_NAMES.c, temperature});
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({scale: SCALE_NAMES.f, temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === SCALE_NAMES.f ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === SCALE_NAMES.c ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput
          scale={SCALE_NAMES.c}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale={SCALE_NAMES.f}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </>
    );
  }
}

interface ITemperatureInputProps {
  scale: SCALE_NAMES;
  temperature: string; 
  onTemperatureChange: (_: string) => void;
}

class TemperatureInput extends React.Component<ITemperatureInputProps> {
  constructor(props: ITemperatureInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scale}</legend>
        <input value={temperature}
               onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

interface IBoilingVerdictProps {
  celsius: number;
}

function BoilingVerdict(props: IBoilingVerdictProps) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  } else {
    return <p>The water would not boil.</p>
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById("root")
);

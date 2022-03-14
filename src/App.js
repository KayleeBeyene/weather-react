import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        <a
          href="https://github.com/KayleeBeyene/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>
        {""}
        code
      </p>
    </div>
  );
}

export default App;

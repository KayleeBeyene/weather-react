import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <p>
          <a
            href="https://github.com/KayleeBeyene/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by Kaylee Beyene
        </p>
      </div>
    </div>
  );
}

export default App;

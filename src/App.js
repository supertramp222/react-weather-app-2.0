import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          {" "}
          This project is created by Katharina Ramer. It is open-sourced. {""}
          <a
            href="https://github.com/supertramp222/react-weather-app-2.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GiHub
          </a>
        </footer>
      </div>
    </div>
  );
}

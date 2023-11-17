// import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <img src={logo} className="App-logo img-fluid" alt="logo" /> */}
        <main>
          <Dictionary />
        </main>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              class="links"
              href="https://www.linkedin.com/in/charline-mons/"
              target="_blank"
              rel="noreferrer"
            >
              Charline Mons
            </a>{" "}
            and is{" "}
            <a
              class="links"
              href="https://github.com/charlinemons/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              class="links"
              href="https://dictionary-react-project-cm.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

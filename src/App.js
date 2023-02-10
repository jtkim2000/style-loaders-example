import logo from "./logo.svg";
// import './App.css';
// import "./App.scss";
import styles from "./App.module.css";

import Button from "./components/Button";

console.log(styles);
// {
//  App: "App_App__VCJ+K"
//  App-logo-spin: "App_App-logo-spin__BC871"
//  header: "App_header__ZY0YY"
//  link: "App_link__vqhjW"
//  logo: "App_logo__oBBgS"
// }

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["header"]}>
        <img src={logo} className={styles["logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;

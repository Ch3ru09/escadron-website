import Header from "./header/Header";
import Main from "./main/Main";
import styles from "./App.module.css";

export default function App() {
  return (
    <div class={styles.App}>
      <Header />
      <Main />
    </div>
  );
}


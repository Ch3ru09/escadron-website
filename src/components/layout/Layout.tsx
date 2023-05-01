import Header from "../header/Header";
import styles from "./layout.module.css";
import { JSX } from "solid-js";

export default function Layout({ children }: Props) {
  return (
    <div class={styles.Layout}>
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

function Main({ children }: Props) {
  return (
    <main class={`${styles["main"]}`}>
      <div class={styles["page"]}>{children}</div>
    </main>
  );
}

type Props = {
  children?: JSX.Element | JSX.Element[];
};


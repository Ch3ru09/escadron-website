import styles from "./Header.module.css";
import logoSource from "../assets/logo.png";

export default function Header() {
  return (
    <header class={`bg-hive ${styles["header"]}`}>
      <div class={`${styles["logo-container"]}`}>
        <div class={`${styles["logo"]} not-selectable`}>
          <img src={logoSource} alt="" />
        </div>
        <div class={styles["logo-text-container"]}>
          <div class={`${styles["logo-text-title"]} not-selectable`}>Escadron 811 La Prairie</div>
          <div class={`${styles["logo-text-description"]} not-selectable`}>Les cadets de l'Aviation royale du Canada</div>
        </div>
      </div>
      <nav></nav>
    </header>
  );
}


import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div class={styles["logo-container"]}>
        {/* logo */}
        <div class={styles["logo-text-container"]}>
          <div class={styles["logo-text-title"]}>Escadron 811 La Prairie</div>
          <div class={styles["logo-text-description"]}>Les cadets de l'Aviation royale du Canada</div>
        </div>
      </div>
      <nav></nav>
    </header>
  );
}


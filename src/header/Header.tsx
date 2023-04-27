import styles from "./Header.module.css";
import logoSource from "../assets/logo.png";
import { For } from "solid-js";

export default function Header() {
  const pages = ["accueil", "inscription", "activités", "cadets", "nous rejoindre"];

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
      <div class={styles["right-side-container"]}>
        <p class={styles["cadets-description"]}>Le programme des cadets s'adresse aux jeunes de 12 à 18 ans. Il n'y a aucun frais d'inscription.</p>
        <nav class={styles["navbar"]}>
          <For each={pages} fallback={<div>Loading...</div>}>
            {(name) => <NavElement name={name} />}
          </For>
        </nav>
      </div>
    </header>
  );
}

function NavElement({ name }: NavProps) {
  return (
    <div class={`${styles["nav-element"]}`} tabIndex={0}>
      {name.toUpperCase()}
    </div>
  );
}

type NavProps = {
  name: string;
};


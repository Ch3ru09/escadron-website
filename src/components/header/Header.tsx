import { A } from "solid-start";
import styles from "./Header.module.css";
import { Accessor, For, Setter, createSignal } from "solid-js";
import { useLocation } from "@solidjs/router";

export default function Header() {
  const pages = ["accueil", "inscription", "activités", "cadets", "nous rejoindre"];

  let pathname = useLocation().pathname.split("/").at(-1);

  if (pathname == undefined) {
    throw new Error("cannot find path");
  }
  console.log(pathname);

  if (pathname == "") {
    pathname = "/";
  }

  const [currentPage, setCurrentPage] = createSignal<string>(pathname);

  return (
    <header class={`bg-clouds ${styles["header"]}`}>
      <div class={`${styles["logo-container"]}`}>
        <div class={`${styles["logo"]} not-selectable`}>
          <img src="/logo.png" alt="" />
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
            {(name) => <NavElement name={name} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
          </For>
        </nav>
      </div>
    </header>
  );
}

function NavElement({ name, currentPage, setCurrentPage }: NavProps) {
  const ref: { [key: string]: string } = {
    accueil: "/",
    inscription: "inscription",
    activités: "activities",
    cadets: "cadets",
    "nous rejoindre": "joinus",
  };

  return (
    <A
      onclick={() => {
        setCurrentPage(name);
      }}
      href={ref[name]}
      class={`${styles["nav-element"]} ${currentPage() == ref[name] ? styles["current-page"] : ""}`}
      tabIndex={0}>
      {name}
    </A>
  );
}

type NavProps = {
  name: string;
  currentPage: Accessor<string | undefined>;
  setCurrentPage: Setter<string>;
};

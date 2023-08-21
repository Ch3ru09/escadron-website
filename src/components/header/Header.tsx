import { useNavigate } from "solid-start";
import styles from "./Header.module.css";
import { Accessor, For, Setter, createSignal } from "solid-js";

export default function Header() {
  const pages = ["accueil", "inscription", "activités", "cadets", "nous rejoindre"];
  const [currentPage, setCurrentPage] = createSignal<string>();

  return (
    <header class={`bg-clouds ${styles["header"]}`}>
      <div class={`${styles["logo-container"]}`}>
        <div class={`${styles["logo"]} not-selectable`}>
          <img src="/logo.png" alt="" />
        </div>
        <div class={styles["logo-text-container"]}>
          <div class={`${styles["logo-text-title"]} not-selectable`}>Escadron 811 La Prairie</div>
          <div class={`${styles["logo-text-description"]} not-selectable`}>
            Les cadets de l'Aviation royale du Canada
          </div>
        </div>
      </div>
      <div class={styles["right-side-container"]}>
        <p class={styles["cadets-description"]}>
          Le programme des cadets s'adresse aux jeunes de 12 à 18 ans. Il n'y a aucun frais d'inscription.
        </p>
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
  const nav = useNavigate();
  const ref: { [key: string]: string } = {
    accueil: "/",
    inscription: "inscription",
    activités: "activities",
    cadets: "cadets",
    "nous rejoindre": "joinus",
  };

  return (
    <button
      onclick={(e) => {
        e.preventDefault();
        nav(ref[name]);
        setCurrentPage(name);
      }}
      class={`${styles["nav-element"]} ${currentPage() == name ? styles["current-page"] : ""}`}
      tabIndex={0}
    >
      {name}
    </button>

    // <a
    //   href={ref[name]}
    //   class={`${styles["nav-element"]} ${currentPage() == name ? styles["current-page"] : ""}`}
    //   tabIndex={0}
    // >
    //   {name}
    // </a>
  );
}

type NavProps = {
  name: string;
  currentPage: Accessor<string | undefined>;
  setCurrentPage: Setter<string>;
};


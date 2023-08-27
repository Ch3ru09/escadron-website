import { A } from "solid-start";
import styles from "./Header.module.css";
import { Accessor, For, Setter, createEffect, createSignal, onMount } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";

export default function Header() {
  const pages = ["accueil", "inscription", "activités", "cadets", "nous rejoindre"];
  const nav = useNavigate();

  let pathname = useLocation().pathname.split("/").at(-1);

  if (pathname == undefined) {
    throw new Error("cannot find path");
  }

  if (pathname == "") {
    pathname = "/";
  }

  const [currentPage, setCurrentPage] = createSignal<string>(pathname);
  const [navBar, setNavBar] = createSignal<Element>();
  const [expanded, setExpanded] = createSignal(false);

  createEffect(() => {
    currentPage();

    setExpanded(false);
    navBar()!.classList.remove(styles["nav-open"]);
  });

  onMount(() => {
    document.addEventListener("scroll", () => {
      setExpanded(false);
      navBar()!.classList.remove(styles["nav-open"]);
    });
  });

  return (
    <header class={`bg-clouds ${styles["header"]}`}>
      <div class={`${styles["logo-container"]}`}>
        <div class={`${styles["logo"]} not-selectable`}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
        </div>
        <div
          class={styles["logo-text-container"]}
          onclick={() => {
            nav("/");
          }}>
          <div class={`${styles["logo-text-title"]} not-selectable`}>Escadron 811 La Prairie</div>
          <div class={`${styles["logo-text-description"]} not-selectable`}>Les cadets de l'Aviation royale du Canada</div>
        </div>
        <Menu navBar={navBar} expanded={expanded} setExpanded={setExpanded} />
      </div>
      <div class={styles["right-side-container"]}>
        <p class={styles["cadets-description"]}>Le programme des cadets s'adresse aux jeunes de 12 à 18 ans. Il n'y a aucun frais d'inscription.</p>
        <nav class={styles["navbar"]} ref={setNavBar}>
          <For each={pages} fallback={<div>Loading...</div>}>
            {(name) => <NavElement name={name} currentPage={currentPage} setCurrentPage={setCurrentPage} expanded={expanded} />}
          </For>
        </nav>
      </div>
    </header>
  );
}

function NavElement({ name, currentPage, setCurrentPage, expanded }: NavProps) {
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
        setCurrentPage(ref[name]);
      }}
      href={ref[name]}
      class={`${styles["nav-element"]} ${currentPage() == ref[name] ? styles["current-page"] : ""} 
      }`}
      tabIndex={expanded() ? 0 : -1}>
      {name}
    </A>
  );
}

function Menu({ navBar, expanded, setExpanded }: MenuProps) {
  return (
    <button
      class={styles["menu-button"]}
      aria-expanded={expanded()}
      onclick={() => {
        setExpanded((current) => !current);
        navBar()!.classList.toggle(styles["nav-open"]);
      }}
      tabIndex={0}>
      <svg viewBox="0 0 256 256" stroke="var(--button-color)" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round">
        <path class={styles["menu-top"]} d="M26 64 h204.8 v159 h-200 l 200 -200" stroke-width="20" />
        <path class={styles["menu-middle"]} d="M26 128 h204.8" stroke-width="20" />
        <path class={styles["menu-bottom"]} d="M26 192 h204.8 v-159 h-200 l200 200" stroke-width="20" />
      </svg>
    </button>
  );
}

type NavProps = {
  name: string;
  currentPage: Accessor<string | undefined>;
  setCurrentPage: Setter<string>;
  expanded: Accessor<boolean>;
};

type MenuProps = {
  navBar: Accessor<Element | undefined>;
  expanded: Accessor<boolean>;
  setExpanded: Setter<boolean>;
};

import { createSignal, lazy, Switch, Match } from "solid-js";
import styles from "./Main.module.css";

const Accueil = lazy(() => import("./accueil/Accueil"));

export default function Main() {
  const [page, setPage] = createSignal<string>("accueil");

  return (
    <main class={`bg-pattern ${styles["main"]}`} style="--c1: var(--white); --c2: aliceblue">
      <div class={styles["page"]}>
        <Switch fallback={<div>Not Found</div>}>
          <Match when={page() == "accueil"}>
            <Accueil />
          </Match>
        </Switch>
      </div>
    </main>
  );
}


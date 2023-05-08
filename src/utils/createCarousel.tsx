import { createEffect, createSignal } from "solid-js";
import type { Setter } from "solid-js";

import styles from "./createCarousel.module.css";

/**
 * Create a element signal setter to put into a ref so it can track and create a css carousel
 *
 * @returns Setter<JSX.Element>
 */

export default function createCarousel(): Setter<Element> {
  const [carousel, setCarousel] = createSignal<Element | undefined>();
  const [count, setCount] = createSignal(0);
  const [items, setItems] = createSignal<Array<Element>>([]);

  createEffect(() => {
    const length = items().length == 0 ? 1 : items().length;
    setCount((current) => (current + 8) % length);

    if (items().length < 1) return;
    for (let x of carousel()!.children) {
      if (!x.classList.contains(styles["carousel-item"])) continue;

      (x as HTMLElement).style.setProperty("--delta", `${count()}`);
    }
  });

  createEffect(() => {
    carousel()!.classList.add(styles.carousel);
    for (let x of carousel()!.children) {
      x.classList.add(styles["carousel-item"]);
    }

    setItems(() => [...carousel()!.children]);
    carousel()!.prepend(createButtons("left", setCount, -1));
    carousel()!.append(createButtons("right", setCount, 1));
  });

  return setCarousel;
}

/**
 *
 * @param side left arrows or right arrows
 *
 * @returns div element
 */
function createButtons(side: string, action: Setter<number>, delta: number): Node {
  const icon = document.createElement("img");
  icon.src = `/arrows/${side}-arrow.png`;
  icon.classList.add(styles[`button`]);
  icon.classList.add(styles[`button-${side}`]);
  // <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by deemakdaksina - Flaticon</a>
  icon.onclick = () => {
    action((c) => c + delta);
  };
  return icon;
}


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
  const [pWidth, setPWidth] = createSignal<number>();

  createEffect(() => {
    carousel()!.firstChild?.style.setProperty("transform", `translate: `);
  });

  createEffect(() => {
    carousel()!.classList.add(styles.carousel);
    const width = carousel()!.firstChild?.clientWidth;
    const margin = Number(window.getComputedStyle(carousel()!.firstChild as Element).marginRight.split("px")[0]);
    for (let x of carousel()!.children) {
      x.classList.add(styles["carousel-item"]);
    }
    setPWidth(carousel()!.clientWidth);

    // setItems(() => [...carousel()!.children]);
    const mod = (pWidth()! - width) / 2;

    carousel()!.innerHTML = `<div class=${styles["carousel-items-container"]}>` + carousel()!.innerHTML + `</div>`;

    carousel()!.firstChild?.style.setProperty("translate", `-${width - mod + margin}px`);
    carousel()!.append(createButtons("left", setCount, 1));
    carousel()!.append(createButtons("right", setCount, -1));
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


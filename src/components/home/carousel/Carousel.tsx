import { For, createEffect, createSignal } from "solid-js";
import styles from "./Carousel.module.css";

export default function ImageCarousel({ images }: { images: { url: string; name: string }[] }) {
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let timerRef: NodeJS.Timeout;

  const previousIndex = () => {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const nextIndex = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const setIndex = (index: number) => {
    setCurrentIndex(index);
  };

  createEffect(() => {
    currentIndex();

    if (timerRef) {
      clearTimeout(timerRef);
    }

    timerRef = setTimeout(() => {
      nextIndex();
    }, 5000);

    return () => clearTimeout(timerRef);
  });

  return (
    <div class={styles["carousel-container"]}>
      <div class={`${styles["arrow"]} ${styles["left-arrow"]}`} onclick={previousIndex}>
        《
      </div>
      <div class={`${styles["arrow"]} ${styles["right-arrow"]}`} onclick={nextIndex}>
        》
      </div>
      <div class={styles["items-container"]} style={`--nbitems: ${images.length}; --current-index: ${currentIndex()}`}>
        <For each={images} fallback={<div></div>}>
          {(_, slideIndex) => {
            return <div class={styles["carousel-item"]} style={`background-image: url(${import.meta.env.BASE_URL}${images[slideIndex()].url})`}></div>;
          }}
        </For>
      </div>
      <div class={styles["dots-container"]}>
        <For each={images} fallback={<div></div>}>
          {(_, index) => (
            <div
              class={styles["dot"]}
              style={{ color: `${currentIndex() === index() ? "#f00" : "#fff"}` }}
              onclick={() => {
                setIndex(index());
              }}>
              •
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

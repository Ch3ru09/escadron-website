import { For, createSignal } from "solid-js";
import styles from "./Carousel.module.css";

export default function ImageCarousel({ images }: { images: { url: string; name: string }[] }) {
  const [currentIndex, setCurrentIndex] = createSignal(0);

  const previousIndex = () => {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const nextIndex = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const setIndex = (index: number) => {
    setCurrentIndex(index);
  };

  setInterval(() => {
    setCurrentIndex((current) => (current + 1) % images.length);
  }, 5000);

  return (
    <div class={styles["carousel-container"]}>
      <div class={`${styles["arrow"]} ${styles["left-arrow"]}`} onclick={previousIndex}>
        《
      </div>
      <div class={`${styles["arrow"]} ${styles["right-arrow"]}`} onclick={nextIndex}>
        》
      </div>
      <div class={styles["carousel-item"]} style={{ "background-image": `url(${images[currentIndex()].url})` }}></div>
      <div class={styles["dots-container"]}>
        <For each={images} fallback={<div></div>}>
          {(_, index) => (
            <div
              class={styles["dot"]}
              style={{ color: `${currentIndex() === index() ? "#f00" : "#fff"}` }}
              onclick={() => {
                setIndex(index());
              }}
            >
              •
            </div>
          )}
        </For>
      </div>
    </div>
  );
}


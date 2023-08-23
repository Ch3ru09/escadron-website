import { A } from "solid-start";
import ImageCarousel from "../carousel/Carousel";
import styles from "./CarouselSection.module.css";

export default function Carousel() {
  const images = [
    { url: "/carousel/1.jpeg", name: "Badges" },
    { url: "/carousel/2.jpeg", name: "Salute" },
    { url: "/carousel/3.jpeg", name: "Inspection" },
    { url: "/carousel/4.jpeg", name: "March" },
    { url: "/carousel/5.jpeg", name: "Attention" },
    { url: "/carousel/6.jpeg", name: "Optimiste" },
    { url: "/carousel/7.jpeg", name: "Glider" },
    { url: "/carousel/8.jpeg", name: "Pilots" },
  ];

  return (
    <div class={styles["carousel"]}>
      <ImageCarousel images={images} />
      <A href="/inscription" class={styles["inscription-button"]}>
        JE VEUX M'INSCRIRE
      </A>
    </div>
  );
}


import styles from "./Description.module.css";

export default function Description() {
  return (
    <p class={styles["description"]}>
      Depuis plus de 50 ans, l'Escadron 811 La Prairie offre aux jeunes de la communauté de prendre part à un programme
      dynamique et structuré par le biais d'une variété d'activités intéressantes et stimulantes. <br /> Les cadets ont
      l'occasion de participer à diverses fonctions de leadership tout au long du programme. Il y a une valeur
      indiscutable à pouvoir compter sur de jeunes personnes d'expérience, bien équilibrées, soucieuses de leur
      communauté et en mesure de prendre leur place comme chefs defile et décideurs de demain.
    </p>
  );
}


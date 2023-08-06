import styles from "./Activities.module.css";

export default function Activities() {
  return (
    <>
      <h1 class={styles["activities-title"]}>Activités des cadets</h1>
      <h2 class={styles["activities-subtitle"]}>
        De nombreuses activités sont offertes tout au long de l'année et de nouvelles activités voient le jour
        constamment. En voici quelques-unes!
      </h2>
    </>
  );
}


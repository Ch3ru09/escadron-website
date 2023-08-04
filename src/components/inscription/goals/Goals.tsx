import styles from "./Goals.module.css";

export default function Goals() {
  return (
    <div class={styles["goals-container"]}>
      <div class={styles["goals-values"]}>
        <h2>VALEURS</h2>
        <p>
          Le programme met l'accent sur les valeurs essentielles comme la loyauté, le professionnalisme, le respect
          mutuel et l'intégrité. Les activités proposées véhiculent l'esprit sportif, le travail d'équipe et la
          tolérance.
        </p>
      </div>
      <div class={styles["goals-success"]}>
        <h2>RÉUSSITE</h2>
        <p>
          Leur instruction au sein de l'escadron pousse les cadets à exceller et à tester leurs compétences nouvellement
          acquises, comme l'art de parler en public, les méthodes d'instruction et l'instruction musicale.
        </p>
      </div>
      <div class={styles["goals-accessibility"]}>
        <h2>ACCESSIBILITÉ</h2>
        <p>
          Tous les jeunes Canadiens de 12 à 18 ans sont admissibles au Programme des cadets, et ce, sans égard au
          revenu, à la race, à la religion, à la culture ou à d'autres facteurs socio-économiques.
        </p>
      </div>
    </div>
  );
}


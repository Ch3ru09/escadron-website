import styles from "./Joinus.module.css";

export default function Joinus() {
  return (
    <>
      <h1 class={styles["joinus-title"]}>NOUS VISITER EN PERSONNE</h1>
      <h2 class={styles["joinus-subtitle"]}>
        Lors de nos soirées d'instruction, les vendredis de septembre à mai, entre 18h30 et 21h00. <br />{" "}
        <i>
          {/* todo: add a calendar page */}
          SVP consulter <a href="">notre calendrier</a> pour connaître les dates auxquelles nous faisons relâche.
        </i>
      </h2>
      <p class={styles["joinus-description"]}>
        Nos soirées d'instruction du vendredi se déroulent au centre multifonctionnel Guy-Dupré, situé au 500 rue
        Saint-Laurent à La Prairie - voir sur la carte ci-dessous.
      </p>
      <section class={styles["first"]}>
        <div class={styles["contact-information"]}>
          <h3>NOS COORDONNÉES</h3>
          <div>
            <div class={styles["phone"]}>
              <h4>Téléphone</h4>
              <a href="tel:4506596282">(450) 659-6282</a>
            </div>
            <div class={styles["mail"]}>
              <h4>Courriel</h4>
              <a href="mailto:info@escadron811.ca">info@escadron811.ca</a>
            </div>
            <div class={styles["postal"]}>
              <h4>Adresse postale</h4>
              <p>
                Escadron 811 La Prairie <br /> 500 rue Saint-Laurent <br /> La Prairie QC J5R 5X2
              </p>
            </div>
          </div>
        </div>
        <div class={styles["map"]}>hello</div>
      </section>
    </>
  );
}


import styles from "./ForCadets.module.css";

export default function ForCadets() {
  const form =
    "//nebula.wsimg.com/42db8f6848dd4b8878680002d84487ea?AccessKeyId=70B757B3A22FDCC635D7&disposition=0&alloworigin=1";

  return (
    <div class={styles["for-cadets-container"]}>
      <h2>JE VEUX M'INSCRIRE. COMMENT FAIRE?</h2>
      <p>
        Pour s'inscrire, il faut <a href="nous%20rejoindre">se présenter en personne à l'Escadron</a> lors des journées
        d'instruction, soit les vendredis de septembre à mai, entre 18h30 et 20h30. Les jeunes devraient être
        accompagnés de leurs parents afin de remplir le <a href={form}>formulaire d'inscription</a>.
      </p>
      <div class={styles["what-to-bring"]}>
        <h3 class={styles["what-to-bring-title"]}>
          <u>Pour accélérer le processus d'inscription, vous pouvez apporter les documents suivants:</u>
        </h3>
        <ul>
          <li>Carte d'assurance-maladie;</li>
          <li>Preuve d'âge (certificat de naissance ou passeport)*;</li>
        </ul>
        <h3 class={styles["what-to-bring-title"]}>
          <i>
            *Pour les personnes nées à l'extérieur du Canada, veuillez également présenter votre carte de résidence
            permanente ou de citoyenneté canadienne, ou votre autorisation de séjour au Canada.
          </i>
        </h3>
      </div>
      <div></div>
    </div>
  );
}


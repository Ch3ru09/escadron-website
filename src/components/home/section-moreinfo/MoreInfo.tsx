import styles from "./MoreInfo.module.css";

export default function MoreInfo() {
  return (
    <div class={styles["more-info"]}>
      <h2 class={styles["info-title"]}>ENCOURAGEZ-NOUS, FAITES UN DON QUI FAIT TOUTE LA DIFFÉRENCE</h2>
      <img src="/logo.png" class={styles["info-logo"]} />
      <div class={styles["info-donation"]}>
        <h3>AIDEZ-NOUS DANS NOTRE MISSION AUPRÈS DE LA JEUNESSE LOCALE</h3>
        <p>
          L'Escadron 811 La Prairie est un organisme de bienfaisance enregistré auprès de l'Agence du Revenu du Canada.
          À ce titre, un reçu de don peut être émis pour tout don admissible, lequel peut ensuite être utilisé lors de
          la production de la déclaration d'impôt sur le revenu du donateur.
        </p>
        <button>DÉCOUVREZ COMMENT FAIRE UN DON</button>
      </div>
      <div class={styles["info-orgs"]}>
        <h3>NOS ORGANISMES PARTENAIRES ET BIENFAITEURS</h3>
        <p>
          Grâce à la contribution, le soutien et l'appui de ces bienfaiteurs, l'Escadron 811 La Prairie peut réaliser
          son mandat auprès de la jeunesse, et ce depuis plus de 50 ans.
        </p>
        <button>VOIR NOS PARTENAIRES</button>
      </div>
      <div class={styles["info-links"]}>
        <h3>AUTRES LIENS</h3>
        <ul>
          <li>
            <a href="//www.cadets.ca/" target="_blank">
              Les Organisations de cadets du Canada
            </a>
          </li>
          <li>
            <a href="//aircadetleague.com/fr/" target="_blank">
              La Ligue des cadets de l'air du Canada
            </a>
          </li>
          <li>
            <a href="//cadetsair.ca/fr/" target="_blank"></a>
          </li>
        </ul>
      </div>
      <div class={styles["info-email"]}>
        <h3>LISTE D'ENVOI ÉLECTRONIQUE</h3>
        <p>
          Abonnez-vous à notre liste d'envoi électronique pour demeurer informé sur nos activités.
          <a href="//mailchi.mp/7738b845e605/inscription-notre-liste-denvoi-lectronique" target="_blank">
            Cliquez ici pour vous abonner.
          </a>
        </p>
      </div>
    </div>
  );
}


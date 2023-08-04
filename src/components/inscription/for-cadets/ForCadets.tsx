import { createSignal } from "solid-js";
import styles from "./ForCadets.module.css";

export default function ForCadets() {
  const form =
    "//nebula.wsimg.com/42db8f6848dd4b8878680002d84487ea?AccessKeyId=70B757B3A22FDCC635D7&disposition=0&alloworigin=1";
  const [anchor, setAnchor] = createSignal<HTMLAnchorElement>();

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
      <div class={styles["form"]}>
        <h2>FORMULAIRE EN LIGNE</h2>
        <p>
          Pour télécharger le formulaire de demande d'admission, cliquez sur le bouton ci-dessous. Vous pourrez ainsi le
          remplir en ligne et en imprimer une copie que vous pourrez apporter avec vous lors de l'inscription.
        </p>
        <button
          class={styles["form-button"]}
          onclick={() => {
            anchor()?.click();
          }}
        >
          Remplir et imprimer le formulaire de demande d'admission à l'avance
          <a href={form} ref={setAnchor} style="display: none" target="_blank"></a>
        </button>
        <p>
          De plus, selon les réponses fournies aux questions reliées à la condition médicale, il est possible que vous
          ayez à remplir un questionnaire de santé détaillé. Si tel est le cas, nous vous contacterons avec plus
          d'instructions.
        </p>
      </div>

      <div class={styles["what-is-cadets"]}>
        <h2 class={styles["what-is-cadets-title"]}>LES CADETS, C'EST QUOI AU JUSTE?</h2>
        <p class={styles["what-is-cadets-paragraph"]}>
          Devenir membre des cadets offre l'occasion de relever des défis, de se faire des amis et de vivre de grandes
          aventures! Il s'agit d'une occasion d'élargir ses horizons, de contribuer à la collectivité et de nouer des
          amitiés qui dureront toute une vie. Beaucoup d'anciens cadets estiment que leur participation au programme
          leur a donné une longueur d'avance et les a poussés à mener de brillantes carrières.{" "}
        </p>
        <p class={styles["what-is-cadets-paragraph"]}>
          Savais-tu que les astronautes canadiens Chris Hadfield, Marc Garneau et Jeremy Hansen sont tous trois
          d'anciens cadets? De nombreux autres dirigeants de la collectivité, célébrités et athlètes importants sont
          également d'anciens cadets. Si tu souhaites en savoir davantage sur les anciens participants au Programme des
          cadets, clique sur le lien suivant.Savais-tu que les astronautes canadiens Chris Hadfield, Marc Garneau et
          Jeremy Hansen sont tous trois d'anciens cadets? De nombreux autres dirigeants de la collectivité, célébrités
          et athlètes importants sont également d'anciens cadets. Si tu souhaites en savoir davantage sur les anciens
          participants au Programme des cadets, clique sur le lien suivant.
        </p>
        <p class={styles["what-is-cadets-paragraph"]}>
          L'Organisation des Cadets du Canada (OCC), dont fait partie l'Escadron 811 La Prairie, permet aux jeunes de 12
          à 18 ans de faire des activités hors du commun et de vivre des expériences inoubliables. Près de 50 000 jeunes
          vivent l'expérience chaque année au travers le Canada. À l'Escadron 811, les cadets ont l'opportunité de faire
          du biathlon, de la musique, de l'aéromodélisme, de l'art oratoire, en plus d'apprendre les techniques de
          survie en forêt. Ils peuvent parfaire leurs connaissances en participant à de la formation estivale, et même
          obtenir leur licence de pilote de planeur ou avion.
        </p>
        <p class={styles["what-is-cadets-paragraph"]}>Les buts de l'Organisation des cadets de l'air sont de :</p>
        <ul class={styles["what-is-cadets-paragraph"]}>
          <li>Développer les qualités de chef et de bon citoyen;</li>
          <li>Promouvoir la bonne forme physique chez les jeunes;</li>
          <li>Stimuler un intérêt envers l'aviation et l'aérospatiale.</li>
        </ul>
        <p class={styles["what-is-cadets-paragraph"]}>
          Pour en savoir plus sur le sujet, consulter le{" "}
          <a href="//www.cadets.ca" target="_blank">
            site national du Programme des cadets du Canada
          </a>{" "}
          ou envoyez nous un courriel à <a href="mailto:info@escadron811.ca">info@escadron811.ca</a>.
        </p>
        <i class={styles["what-is-cadets-paragraph"]}>
          <b>
            Les cadets ne sont pas des membres des Forces armées canadiennes et en aucun cas ils ne peuvent être appelés
            à participer à des opérations militaires.
          </b>
        </i>
      </div>
    </div>
  );
}


import styles from "./ForVolunteers.module.css";

export default function ForVolunteers() {
  return (
    <div class={styles["for-volunteers-container"]}>
      <h2>J'AIMERAIS DEVENIR BÉNÉVOLE</h2>
      <p>
        Êtes-vous agé de 18 ans ou plus et intéressé à façonner l'avenir de jeunes canadiens en étant bénévole dans un
        programme dynamique offrant la possibilité de vivre pleins d'expériences palpitantes?
      </p>
      <p>Si vous répondez oui aux questions suivantes, cette occasion de bénévolat est peut-être pour vous…</p>
      <ul>
        <li>Êtes‑vous agé de 18 ans ou plus?</li>
        <li>Avez‑vous 3 heures à donner au moins une fois par semaine?</li>
        <li>Aimez‑vous travailler avec des jeunes âgés de 12 à 19 ans?</li>
        <li>Vous intéressez‑vous à l’environnement nautique, aux aventures en plein air ou à l’aviation?</li>
      </ul>
      <p>
        Les bénévoles civils soutiennent les activités autorisées des cadets et doivent avoir franchi avec succès les
        étapes de l’enquête de fiabilité (vérification du casier judiciaire [VCJ] et de l’habilitation à travailler
        auprès des jeunes vulnérables [HPV]) menée par la Ligue des cadets de l'air. Il s’agit d’un processus
        systématique accepté par les deux partenaires, soit le ministère de la Défense nationale (MDN) et la Ligue des
        cadets de l’Air, afin de confirmer que l’on peut s’attendre à ce qu’une personne soit fiable et digne de
        confiance avant qu’elle participe à des activités des cadets autorisées. La Ligue vous remettra alors une carte
        d’identité et vous devrez signer l’entente des bénévoles civils.
      </p>
      <p>
        <a href="/joinus">Communiquez directement avec nous pour plus d'informations.</a>
      </p>
    </div>
  );
}


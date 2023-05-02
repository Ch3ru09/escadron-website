import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Description />
      <Calendar />
      <MoreInfo />
    </>
  );
}

function Carousel() {
  return (
    <div class={styles["carousel-container"]}>
      <div class={`${styles["carousel"]} js-flickity`} data-flickity-options='{ "wrapAround": true }'>
        {/* * I didn't use a for loop for this since it breaks the carousel css */}
        <img src="/carousel/1.jpeg" class={styles["carousel-item"]} />
        <img src="/carousel/2.jpeg" class={styles["carousel-item"]} />
        <img src="/carousel/3.jpeg" class={styles["carousel-item"]} />
        <img src="/carousel/4.jpeg" class={styles["carousel-item"]} />
        <img src="/carousel/5.jpeg" class={styles["carousel-item"]} />
        <img src="/carousel/6.jpeg" class={styles["carousel-item"]} />
        <img src="/carousel/7.jpeg" class={styles["carousel-item"]} />
        <img src="/carousel/8.jpeg" class={styles["carousel-item"]} />
      </div>
      <a href="/inscription" class={styles["inscription-button"]}>
        JE VEUX M'INSCRIRE
      </a>
    </div>
  );
}

function Description() {
  return (
    <p class={styles["description"]}>
      Depuis plus de 50 ans, l'Escadron 811 La Prairie offre aux jeunes de la communauté de prendre part à un programme dynamique et structuré par le biais d'une variété d’activités intéressantes et stimulantes. <br /> Les cadets ont l’occasion de participer à diverses fonctions de leadership tout au long du programme. Il y a une valeur indiscutable à pouvoir compter sur de jeunes personnes d’expérience, bien équilibrées, soucieuses de leur communauté et en mesure de prendre leur place comme
      chefs defile et décideurs de demain.
    </p>
  );
}

function Calendar() {
  return <iframe class={styles["calendar"]} src="https://calendar.google.com/calendar/embed?title=Calendrier%20des%20activit%C3%A9s%20de%20l%27Escadron%20811%20La%20Prairie&mode=AGENDA&showNav=0&showPrint=0&showTabs=0&showDate=1&hl=fr&showCalendars=0&showTz=0&height=800&wkst=2&bgcolor=%23FFFFFF&src=ct4q9lk3ogbjavs7rcij1bgpjk%40group.calendar.google.com&color=%23853104&ctz=America%2FNew_York" />;
}

function MoreInfo() {
  return (
    <div class={styles["more-info"]}>
      <h2 class={styles["info-title"]}>ENCOURAGEZ-NOUS, FAITES UN DON QUI FAIT TOUTE LA DIFFÉRENCE</h2>
      <img src="/logo.png" class={styles["info-logo"]} />
      <div class={styles["info-donation"]}>
        <h3>AIDEZ-NOUS DANS NOTRE MISSION AUPRÈS DE LA JEUNESSE LOCALE</h3>
        <p>L'Escadron 811 La Prairie est un organisme de bienfaisance enregistré auprès de l'Agence du Revenu du Canada. À ce titre, un reçu de don peut être émis pour tout don admissible, lequel peut ensuite être utilisé lors de la production de la déclaration d'impôt sur le revenu du donateur.</p>
        <button>DÉCOUVREZ COMMENT FAIRE UN DON</button>
      </div>
      <div class={styles["info-orgs"]}>
        <h3>NOS ORGANISMES PARTENAIRES ET BIENFAITEURS</h3>
        <p>Grâce à la contribution, le soutien et l'appui de ces bienfaiteurs, l'Escadron 811 La Prairie peut réaliser son mandat auprès de la jeunesse, et ce depuis plus de 50 ans.</p>
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


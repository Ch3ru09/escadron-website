import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Description />
      <Calendar />
    </>
  );
}

function Carousel() {
  return (
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


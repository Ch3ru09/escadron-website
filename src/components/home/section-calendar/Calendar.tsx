import styles from "./Calendar.module.css";

export default function Calendar() {
  return (
    <iframe
      class={styles["calendar"]}
      src="https://calendar.google.com/calendar/embed?title=Calendrier%20des%20activit%C3%A9s%20de%20l%27Escadron%20811%20La%20Prairie&mode=AGENDA&showNav=0&showPrint=0&showTabs=0&showDate=1&hl=fr&showCalendars=0&showTz=0&height=800&wkst=2&bgcolor=%23FFFFFF&src=ct4q9lk3ogbjavs7rcij1bgpjk%40group.calendar.google.com&color=%23853104&ctz=America%2FNew_York"
    />
  );
}


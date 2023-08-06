import { For, createSignal } from "solid-js";
import styles from "./Activities.module.css";

export default function Activities() {
  let [activities, setActivities] = createSignal<ActivityCardProps["info"][]>();
  import("./activities.json").then((module) => setActivities(module.default));

  return (
    <>
      <h1 class={styles["activities-title"]}>Activités des cadets</h1>
      <h2 class={styles["activities-subtitle"]}>
        De nombreuses activités sont offertes tout au long de l'année et de nouvelles activités voient le jour
        constamment. <br /> En voici quelques-unes!
      </h2>
      <section class={styles["activities-container"]}>
        <For each={activities()} fallback={<div></div>}>
          {(info) => <ActivityCard info={info} />}
        </For>
      </section>
    </>
  );
}

function ActivityCard({ info }: ActivityCardProps) {
  const { title, image, description } = info;

  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

type ActivityCardProps = {
  info: {
    title: string;
    image: string;
    description: string;
  };
};


import Goals from "~/components/inscription/goals/Goals";
import ForCadets from "~/components/inscription/for-cadets/ForCadets";
import ForVolunteers from "~/components/inscription/for-volunteers/ForVolunteers";
import styles from "./Inscription.module.css";

export default function Inscription() {
  return (
    <>
      <Goals />
      <div class={styles["inscription-container"]}>
        <ForCadets />
        <ForVolunteers />
      </div>
    </>
  );
}


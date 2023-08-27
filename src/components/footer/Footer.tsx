import { createSignal } from "solid-js";
import styles from "./Footer.module.css";

import FacebookImg from "./_assets/facebook.jpeg";
import LogoSquadron from "./_assets/logo-escadron.png";
import LogoMainsonneuve from "./_assets/logo-maisonneuve.png";

export default function Footer() {
  const [anchorRef, setAnchorRef] = createSignal<HTMLAnchorElement>();

  return (
    <footer class={`bg-clouds ${styles["footer"]}`}>
      <section class={styles["first-row"]}>
        <div>
          <img src={LogoSquadron} alt="" class={styles["logo-escadron"]} />
          <p>
            L'Escadron 811 La Prairie est fièrement affilié au <br />
            Régiment de Maisonneuve et le remercie de son appui
          </p>
          <img src={LogoMainsonneuve} alt="" class={styles["logo-maisonneuve"]} />
        </div>
        <div
          class={styles["join-facebook"]}
          onclick={() => {
            anchorRef()?.click();
          }}>
          <h1>Nous Suivre</h1>
          <img src={FacebookImg} alt="" />
          <a href="//www.facebook.com/811LaPrairie/" target="_blank" style="display: none" ref={setAnchorRef}></a>
        </div>
      </section>
      <section class={styles["footer-info"]}>
        <p>L'Escadron 811 La Prairie est un organisme de bienfaisance enregistré auprès de l'Agence du Revenu du Canada | Numéro d'enregistrement : 123613523RR0020</p>
      </section>
    </footer>
  );
}

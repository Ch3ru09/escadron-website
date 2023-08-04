import styles from "./Footer.module.css";

// TODO: rest of the footer with styles

export default function Footer() {
  return (
    <footer class={`bg-clouds ${styles["footer"]}`}>
      <section>
        <img src="" alt="" />
        <p>L'Escadron 811 La Prairie est fièrement affilié au Régiment de Maisonneuve et le remercie de son appui</p>
        <img src="" alt="" />
        <h1>Nous Suivre</h1>
        <img src="" alt="" />
      </section>
      <section class={styles["footer-info"]}>
        <p>
          L'Escadron 811 La Prairie est un organisme de bienfaisance enregistré auprès de l'Agence du Revenu du Canada |
          Numéro d'enregistrement : 123613523RR0020
        </p>
      </section>
    </footer>
  );
}


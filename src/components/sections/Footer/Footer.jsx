/* eslint-disable jsx-a11y/anchor-has-content */
import styles from "./Footer.module.css";
import Title from "../../UI/Title/Title";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Title titleText="Контакты" />
        <div id="Контакты" className={styles.poste}>
          <h4 className={styles.subtitle}>E-mail</h4>
          <p className={styles.text}>IZABELE-TAN4@yandex.ru</p>
        </div>
        <ul className={styles.icons}>
          <li className={styles.icon}>
            <a
              href="https://vk.com/id86707482"
              target="_blank"
              className={styles.about + " " + styles.vk}
              rel="noreferrer"
            ></a>
          </li>
          <li className={styles.icon}>
            <a
              href="https://github.com/AnnaKesova"
              target="_blank"
              className={styles.about + " " + styles.github}
              rel="noreferrer"
            ></a>
          </li>
          <li className={styles.icon}>
            <a
              href="https://t.me/AnnaQ999"
              target="_blank"
              className={styles.about + " " + styles.tg}
              rel="noreferrer"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

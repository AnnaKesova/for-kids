import styles from "./Main.module.css";
import schoolPhoto from "../../../images/schoolPhoto.png";
import now from "../../../images/nowmy.png";
import Title from "../../UI/Title/Title"

function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Title titleText="Обо мне"/>
        <div id="Обо мне" className={styles.about}>
          <div className={styles.line}>
            <div className={styles.size}>
              <img
                src={schoolPhoto}
                className={styles.photo}
                alt="schoolPhoto"
              ></img>
            </div>
            <div className={styles.size}>
              <h3 className={styles.subtitle}> Hard skills</h3>
              <ul className={styles.list}>
                <li className={styles.text}>Французский язык</li>
                <li className={styles.text}>Математика</li>
                <li className={styles.text}>Литература</li>
              </ul>
              <h3 className={styles.subtitle}> Soft skills</h3>
              <ul className={styles.list}>
                <li className={styles.text}>Ответственность</li>
                <li className={styles.text}>Коммуникативность</li>
                <li className={styles.text}>Терпение</li>
              </ul>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.size}>
              <h3 className={styles.subtitle} id="Hard skills"> Hard skills</h3>
              <ul className={styles.list}>
                <li className={styles.text}>HTML, CSS, JS</li>
                <li className={styles.text}>React.js</li>
                <li className={styles.text}>Английский язык</li>
              </ul>
              <h3 className={styles.subtitle}> Soft skills</h3>
              <ul className={styles.list}>
                <li className={styles.text}>Cамоорганизация</li>
                <li className={styles.text}>Самообразование</li>
                <li className={styles.text}>Умение слушать детей</li>
              </ul>
            </div>
            <div className={styles.size}>
              <img src={now} className={styles.photo} alt="now"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

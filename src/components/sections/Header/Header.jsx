import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";


function Header() {
const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <a href="#Обо мне" rel="noreferrer" className={styles.about}>
            Обо мне
          </a>
          <a href="#Hard skills" rel="noreferrer" className={styles.about}>
            Навыки
          </a>
          <a href="#Контакты" rel="noreferrer" className={styles.about}>
            Контакты
          </a>
          <button className={styles.person} onClick={() => navigate('/signup')}></button>
        </nav>

        <div className={styles.naming}>
          <h1 className={styles.title}>Кесова Анна</h1>
          <h2 className={styles.subtitle}>Front-End Developer</h2>
        </div>
      </header>
    </div>
  );
}

export default Header;

import styles from './App.css';
import Footer from './components/sections/Footer/Footer';
import Header from './components/sections/Header/Header';
import Main from './components/sections/Main/Main';

function App() {
  return (
    <div className={styles.App}>
      < Header/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;

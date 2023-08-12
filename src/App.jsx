import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.css";
import Footer from "./components/sections/Footer/Footer";
import Header from "./components/sections/Header/Header";
import Main from "./components/sections/Main/Main";
import Registration from "./components/Registration/Registration";
import ContainerForms from "./components/UI/ContainerForms/ContainerForms";
import Authorization from "./components/Authorization/Authorization";

function App() {
  
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<ContainerForms><Registration /></ContainerForms>} />
          <Route path="/signin" element={<ContainerForms><Authorization /></ContainerForms>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

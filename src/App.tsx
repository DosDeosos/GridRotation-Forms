import "./App.css";
import LandingPage from "./pages/LandingPage";
import GridRotation from "./pages/GridRotation";
import FormsSheet from "./pages/FormsSheet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import MainLayout from "./layouts/main";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/grid" element={<GridRotation />}></Route>
              <Route path="/forms" element={<FormsSheet />}></Route>
            </Route>
          </Routes>
        </Router>
      </I18nextProvider>
    </>
  );
}

export default App;

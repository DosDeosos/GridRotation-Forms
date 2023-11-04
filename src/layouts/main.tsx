import { Outlet } from "react-router-dom";
import LanguageBar from "../components/layout/languagebar";

function MainLayout() {
  return (
    <div className="max-h-screen h-screen overflow-auto flex flex-col">
      <LanguageBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;

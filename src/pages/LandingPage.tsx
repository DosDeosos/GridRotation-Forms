import "../assets/css/background.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function LandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const togridtest = () => {
    navigate("/grid");
  };

  const toformstest = () => {
    navigate("/forms");
  };
  return (
    <div className="background h-full">
      <div className="grid grid-cols-2 place-items-center h-full">
        <button
          className="bg-white border-4  border-black w-[18rem] h-32 rounded-3xl"
          onClick={togridtest}
        >
          {t("gridMenu")}
        </button>
        <button
          className="bg-white border-4 border-black w-[18rem] h-32 rounded-3xl"
          onClick={toformstest}
        >
          {t("formsMenu")}
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

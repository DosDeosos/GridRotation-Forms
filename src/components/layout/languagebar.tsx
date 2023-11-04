import Selector from "../ui/selector";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function LanguageBar() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const tohomepage = () => {
    navigate("/");
  };

  const changeLanguage = (e: any) => {
    i18n.changeLanguage(e);
  };

  return (
    <>
      <div className="background p-4 flex flex-col items-end">
        <div>
          <Selector
            selectedLanguage={i18n.language}
            onLanguageChange={changeLanguage}
          />
        </div>
        <button
          className="rounded-xl mt-4 p-2 border-2 bg-white"
          onClick={tohomepage}
        >
          {t("tohomepage")}
        </button>
      </div>
    </>
  );
}

export default LanguageBar;

import { useContext } from "react";
import { languageContext } from "./languageContext";
const content = {
  English:
    "The cat sat lazily on the windowsill, basking in the warm sunshine and occasionally twitching its tail.",
  Hindi:
    "बिल्ली खिड़की पर आलस्य से बैठी थी, गर्म धूप का आनंद ले रही थी और कभी-कभी अपनी पूंछ को हिलाती थी।",
  Marathi:
    "मांजर खिडकीवर आळशीपणे बसली, उबदार सूर्यप्रकाशात बासिंग करत आणि अधूनमधून तिची शेपटी वळवत."
};


export const Home = () => {
  // get language context here
  const {language, setLanguage} = useContext(languageContext);
  
  const activeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage)
  };
  return (
    <div>
      <div className="language-container">
        <span onClick={() => activeLanguage("English")}>English</span>
        <span onClick={() => activeLanguage("Hindi")}>Hindi</span>
        <span onClick={() => activeLanguage("Marathi")}>Marathi</span>
      </div>
      <p>{content[language]}</p>
    </div>
  );
};

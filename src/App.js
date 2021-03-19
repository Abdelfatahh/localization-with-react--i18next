import { useTranslation } from "react-i18next";
import i18next from "i18next";



const langs = ['ar', 'en'];
let x = 0;
function App() {
  const { t } = useTranslation();

      return (
      <div className="App">
      <div>{t("Welcome to React")}</div>
      <div>
         <a onClick={
  

        
               () => {
                i18next.changeLanguage(langs[x])
                 if(x===0){
                  x=1;
                 } else{
                   x=0;
                 }
               }

          } href="/#">{t('lang')}</a>
      </div>
    </div>
  );
}

export default App;

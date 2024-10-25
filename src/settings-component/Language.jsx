import React from 'react'
import danish from '/src/assets/settings-images/danish.png'
import German from '/src/assets/settings-images/German.png'
import UK from '/src/assets/settings-images/UK.png'
import US from '/src/assets/settings-images/US.png'
import Spanish from '/src/assets/settings-images/Spanish.png'
import LATAM from '/src/assets/settings-images/LATAM.png'
import French from '/src/assets/settings-images/French.png'
import Croatian from '/src/assets/settings-images/Croatian.png'
import Italian from '/src/assets/settings-images/Italian.png'
import Lithuanian from '/src/assets/settings-images/Lithuanian.png'
import Hungarian from '/src/assets/settings-images/Hungarian.png'
import du from '/src/assets/settings-images/du.png'
import Norsk from '/src/assets/settings-images/Norsk.png'
import Polski from '/src/assets/settings-images/Polski.png'
import Brasil from '/src/assets/settings-images/Brasil.png'
import Română from '/src/assets/settings-images/Română.png'
import Suomi from '/src/assets/settings-images/Suomi.png'
import Svenska from '/src/assets/settings-images/Svenska.png'
import Tiếng from '/src/assets/settings-images/Tiếng.png'
import Türkçe from '/src/assets/settings-images/Türkçe.png'
import Čeština from '/src/assets/settings-images/Čeština.png'
import Ελληνικά from '/src/assets/settings-images/Ελληνικά.png'
import Bulgarian from '/src/assets/settings-images/Bulgarian.png'
import Russian from '/src/assets/settings-images/Russian.png'
import Ukrainian from '/src/assets/settings-images/Ukrainian.png'
import हिंदी from '/src/assets/settings-images/हिंदी.png'
import Thai from '/src/assets/settings-images/Thai.png'
import China from '/src/assets/settings-images/China.png'
import Japanese from '/src/assets/settings-images/Japanese.png'
import Chinese from '/src/assets/settings-images/Chinese.png'
import Korean from '/src/assets/settings-images/Korean.png'
import Esc from './Esc'




function Language() {
    const Languages = [
            { id: 1,    heading: "Dansk", para: "Danish", url: danish },
            { id: 8,    heading: "Deutsch", para: "German", url: German },
            { id: 9,    heading: "English, UK", para: "English, UK", url:  UK },
            { id: 10,    heading: "English, US", para: "English, US", url:  US },
            { id: 8,    heading: "Español", para: "Spanish", url: Spanish },
            { id: 9,    heading: "Español, LATAM", para: "Spanish, LATAM", url:  LATAM },
            { id: 10,    heading: "Français", para: "French", url: French },
            { id: 8,    heading: "Hrvatski", para: "Croatian", url: Croatian },
            { id: 9,    heading: "Italiano", para: "Italian", url: Italian },
            { id: 10,    heading: "Lietuviškai", para: "Lithuanian", url: Lithuanian },
            { id: 8,    heading: "Magyar", para: "Hungarian", url: Hungarian },
            { id: 9,    heading: "Nederlands", para: "Dutch", url: du },
            { id: 10,    heading: "Norsk", para: "Norwegian", url: Norsk },
            { id: 8,    heading: "Polski", para: "Polish", url: Polski },
            { id: 9,    heading: "Português do Brasil", para: "Portuguese, Brazilian", url: Brasil },
            { id: 10,    heading: "Română", para: "Romanian, Romania", url: Română },
            { id: 8,    heading: "Suomi", para: "Finnish", url: Suomi },
            { id: 9,    heading: "Svenska", para: "Swedish", url: Svenska },
            { id: 10,    heading: "Tiếng Việt", para: "Vietnamese", url: Tiếng },
            { id: 10,    heading: "Türkçe", para: "Turkish", url: Türkçe },
            { id: 10,    heading: "Čeština", para: "Czech", url: Čeština },
            { id: 10,    heading: "Ελληνικά", para: "Greek", url: Ελληνικά },
            { id: 10,    heading: "български", para: "Bulgarian", url: Bulgarian },
            { id: 10,    heading: "Русский", para: "Russian", url: Russian },
            { id: 10,    heading: "Українська", para: "Ukrainian", url: Ukrainian },
            { id: 10,    heading: "हिंदी", para: "Hindi", url: हिंदी },
            { id: 10,    heading: "ไทย", para: "Thai", url: Thai },
            { id: 10,    heading: "中文", para: "Chinese, China", url: China },
            { id: 10,    heading: "日本語", para: "Japanese", url: Japanese },
            { id: 10,    heading: "繁體中文", para: "Chinese, Taiwan", url: Chinese },
            { id: 10,    heading: "한국어", para: "Korean", url: Korean },
    ];
  return (
    <div   className='language_01'>
      <div className="language_02">
         {/* <button>×</button>
        <h6>ESC</h6> */}
        <Esc/>
      </div>
      <div className="language_03">
        <h3>Language</h3>
      </div>
      <div className="language_04">
        <p>Select a Language</p>
      </div>
      
      {Languages.map(item => (
          <>
      <div className="language_05">
         
            <div className="language_05_first">
                <input type="radio" />
                <p>{item.heading}</p>
            </div>
            <div className="language_05_second">
               <p>{item.para}</p>
                <img src={item.url} alt="" />
            </div>
      </div>
      <br />
         </>
        ))}
      
    </div>
  )
}

export default Language

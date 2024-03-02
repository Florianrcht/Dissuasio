import React from "react";
import "./page.css";

export default function Home() {
  return (
    <main className="main_accueil">
      <br/>
      <div className="div_1">
        <div className="body_div_1">
          <div className="gap"></div>
          <div className="div_1_left">
            <h1> &gt;&gt; Dissuasio</h1>
            <br/>
            <p className="div_1_p">Retrouvez, partagez, découvrez toutes les actualités sur les 3 branches de l'Armée Française</p>
            <br/>
            <br/>
            <div className="div_1_button">
              <a href="/carte" className="div_1_boutons">Unités</a>
              <a href="/actualites" className="div_1_boutons">Actualités</a>
              <a href="/opex" className="div_1_boutons">OPEX</a>
            </div>
          </div>        
          <div className="div_1_right">
            <img src="https://beymedias.brightspotcdn.com/dims4/default/19c8cfe/2147483647/strip/false/crop/2500x1667+0+0/resize/1486x991!/quality/90/?url=http%3A%2F%2Fl-opinion-brightspot.s3.amazonaws.com%2Fa8%2Ffd%2Fbcd87e64446dbe3a67dea99b156e%2Farmee-de-terre-sipa.jpg"/>
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>

      <div className="div_2">
        <div className="body_div_2">
          <div className="div_2_left">
            <p className="div_2_p">Retrouvez, partagez, découvrez toutes les actualités sur les 3 branches de l'Armée Française</p>
          </div> 
          <div className="div_2_center">
            <img src="https://www.defense.gouv.fr/var/dicod/storage/images/base-de-medias/images/terre/actualites/2021/2021-05/le-1er-regiment-de-chasseurs-a-cheval-1er-rch-est-engage-dans-l-operation-barkhane/10616891-1-fre-FR/Le-1er-regiment-de-chasseurs-a-cheval-1er-RCh-est-engage-dans-l-operation-Barkhane.jpg"/>
          </div>       
          <div className="div_2_right">
            <h1 className="div_2_h1"> Services &lt;&lt;</h1>
          </div>
        </div>
      </div>
      <br/>
    </main>
  );
}

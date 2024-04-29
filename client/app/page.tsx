'use client';
import React from "react";
import "./page.css";
import "../public/map_img.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';

export default function Home() {
  const services = [
    { nom: "Unités", img_url: "map_img.png", value: "/unites" },
    { nom: "Actualités", img_url: "map_img.png", value: "/actualites" },
    { nom: "OPEX", img_url: "map_img.png", value: "/opex" },
  ];

  const [count, setCount] = React.useState(0);
  const service = services[count];

  const handleChangeService = (step: number) => {
    const newCount = count + step;
    console.log(newCount);

    if (newCount >= 0 && newCount < services.length) {
      setCount(newCount);
    }
    if(newCount === 3){
      setCount(0)
    }
    if(newCount === -1){
      setCount(2)
    }

    const ps = document.querySelectorAll('.div_2_p p');
    ps.forEach((p, index) => {
      p.classList.remove('p_selected');
    });

    const pSelected = document.querySelector(`.p_${newCount}`);
    if (pSelected) {
      pSelected.classList.add('p_selected');
    }
  };


  return (
    <main className="main_accueil">
      <br/>
      <div className="div_1">
        <div className="body_div_1">
          <div className="gap"></div>
          <div className="div_1_left">
            <h1> &gt;&gt; Dissuasio</h1>
            <br/>
            <p className="div_1_p">Retrouvez, partagez, découvrez toutes les actualités sur les 3 branches de l&apos;Armée Française</p>
            <br/>
            <br/>
            <div className="div_1_button">
              <a href="/unites" className="div_1_boutons">Unités</a>
              <a href="/actualites" className="div_1_boutons">Actualités</a>
              <a href="/opex" className="div_1_boutons">OPEX</a>
            </div>
          </div>        
          <div className="div_1_right">
            <Image src="https://beymedias.brightspotcdn.com/dims4/default/19c8cfe/2147483647/strip/false/crop/2500x1667+0+0/resize/1486x991!/quality/90/?url=http%3A%2F%2Fl-opinion-brightspot.s3.amazonaws.com%2Fa8%2Ffd%2Fbcd87e64446dbe3a67dea99b156e%2Farmee-de-terre-sipa.jpg" alt="Image" />
          </div>
        </div>
      </div>

      <br/>
      <br/>
      <br/>

      <div className="div_2">
        <div className="body_div_2">
          <div className="div_2_left">
            <a href={service.value}><Image src={service.img_url} alt="Service Image" /></a>
            <div style={{display:'flex',justifyContent:'space-around'}}>
            <div onClick={() => handleChangeService(-1)}>
                <i className="bi bi-arrow-left-circle"> Précédent</i>
              </div>
              <div>
                <i>{service.nom}</i>
              </div>
              <div style={{ display: "flex" }} onClick={() => handleChangeService(1)}>
                <i style={{paddingRight:'8px'}}>Suivant</i>
                <i className="bi bi-arrow-right-circle"></i>
              </div>
            </div>
          </div>       
          <div className="div_2_right" style={{display:'flex', flexDirection:"column", justifyContent:'space-between'}}>
            <h1 className="div_2_h1" style={{display:'flex',flexDirection:'row-reverse'}}> Services &lt;&lt;</h1>
            <div className="div_2_p">
              <p>
                Parcourez à travers le site :</p>
                <br />
                <p className="p_3 p_selected">-Unités : Carte interactive des bases Françaises</p>
                <br />
                <p className="p_1">-Actualités : Retrouvez les dernières informations sur l&apos;Armée de Terre, Mer, Air</p>
                <br />
                <p className="p_2">-OPEX : La position et interactions des troupes Françaises à l&apos;étranger</p>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </main>
  );
}

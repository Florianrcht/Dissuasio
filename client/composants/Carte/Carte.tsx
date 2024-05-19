
'use client'
import React, { useEffect, useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayerGroup
} from "react-leaflet";
import MarkerIcon from "../../public/targetIcon.png";
import "leaflet/dist/leaflet.css";

const Carte = () => {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const styleId = process.env.NEXT_PUBLIC_STYLE_ID;
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  const carteDarkUrl = `https://api.mapbox.com/styles/v1/${username}/${styleId}/tiles/256/{z}/{x}/{y}?access_token=${accessToken}&zoomwheel=true&fresh=true`;

  type UniteArmeeTerre = {
    id: number;
    arme: string;
    create: string;
    lat: string;
    liens: string;
    long: string;
    nom: string;
    update: string;
  };

  const toggleDisplayUnitesArmeeTerre = () => {
    const elements = document.getElementsByClassName("unites_armee_terre");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        const currentDisplay = element.style.display || getComputedStyle(element).getPropertyValue('display');
    
        element.style.display = currentDisplay === 'none' ? 'block' : 'none';
      }
};

const [unitesArmeeTerre, setUnitesArmeeTerre] = useState<UniteArmeeTerre[]>([]);

  useEffect(() => {
    fetch('https://dissuasio.fr/api/Unites/Terre/GetAll')
      .then(response => response.json())
      .then(data => setUnitesArmeeTerre(data))
      .catch(error => console.error(error));
  }, []);
  console.log(unitesArmeeTerre);

  const [selectedFilters, setSelectedFilters] = useState<string[]>(["unitesArmeeTerre"]); 
  const filtres = [
    {
      name: "Unités Armée de Terre",
      key: "unitesArmeeTerre",
      subfilters: [
        { name: "Arme Blindée Cavalerie", key: "armeBlindeeCavalerie" },
        { name: "Artillerie", key: "armeArtillerie" },
        { name: "Aviation Légère de l'Armée de Terre (ALAT)", key: "armeAlat" },
        { name: "Génie", key: "armeGenie" },
        { name: "Infanterie", key: "armeInfanterie" },
        { name: "Matériel", key: "armeMateriel" },
        { name: "Service de Santé", key: "armeServiceSante" },
        { name: "Train", key: "armeTrain" },
        { name: "Transmission", key: "armeTransmission" },
      ],
    },
    { name: "Bases Marine Nationale", key: "marineNationale" },
    { name: "Bases Armée de l'Air", key: "armeeAir" },
  ];

  
  return (
    <div className="carte_container">
      <p>Carte</p>
      <div className="filtre_container">
        <h3>Filtres :</h3>
        <ul className="filtres">
          {filtres.map((filtre) => (
            <li key={filtre.key}>
              <label>
                <input
                  type="checkbox"
                  value={filtre.key}
                  checked={selectedFilters.includes(filtre.key)}
                  defaultChecked={true}
                  onChange={() => {
                    const { key } = filtre;
                    setSelectedFilters(prevFilters =>
                      prevFilters.includes(key)
                        ? prevFilters.filter(f => f !== key)
                        : [...prevFilters, key]
                    );
                    if (key === "unitesArmeeTerre") {
                      toggleDisplayUnitesArmeeTerre();
                    }
                  }}
                />
                {filtre.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="map-container">
        <MapContainer
          style={{
            height: "100vh",
            width: "100%"
          }}
          center={[46.772, 4.913]}
          zoom={6}
          scrollWheelZoom={true}
        >
          <TileLayer
            url={carteDarkUrl}
            attribution="OpenStreetMap, Mapbox, LeafLet"
          />

            {unitesArmeeTerre.map((units) => (
                <Marker
                icon={new L.Icon({
                    className: 'unites_armee_terre',
                    iconUrl: MarkerIcon.src,
                    iconSize: [30, 30],
                    iconAnchor: [20, 20],
                    popupAnchor: [0, -41],
                })}
                position={[parseFloat(units.lat), parseFloat(units.long)]}
                >
                <Popup>
                    <div>
                    <a href={units.liens}>{units.nom}</a>
                    <p> {units.arme}</p>
                    </div>
                </Popup>
                </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Carte;

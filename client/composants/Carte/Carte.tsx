
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

  const [unitesArmeeTerre, setUnitesArmeeTerre] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/unites-armee-terre')
      .then(response => response.json())
      .then(data => setUnitesArmeeTerre(data))
      .catch(error => console.error(error));
  }, []);
  console.log(unitesArmeeTerre);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
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
                onChange={(e) => {
                    const { value } = e.target;
                    setSelectedFilters((prevFilters) =>
                    prevFilters.includes(value)
                        ? prevFilters.filter((f) => f !== value)
                        : [...prevFilters, value]
                    );
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

          <LayerGroup>
            {selectedFilters.map((filterKey) => {
              switch (filterKey) {
                case "unitesArmeeTerre":
                  return (
                    <>

                    {/*3e RIMa*/}
                    <Marker
                          key={filterKey}
                          icon={new L.Icon({
                              iconUrl: MarkerIcon.src,
                              iconSize: [30, 30],
                              iconAnchor: [20, 20],
                              popupAnchor: [0, -41]
                          })}
                          position={[47.6593523115151, -2.7447110708501414]}
                      >
                          <Popup>
                              <a
                                  href="https://www.sengager.fr/regiments/3e-regiment-dinfanterie-de-marine"
                                  target="_blank"
                                  rel="noreferrer"
                              >
                                  3e RIMa (Régiment d'Infanterie de Marine)
                              </a>
                          </Popup>
                      </Marker>
                      
                      {/*2e regiment du materiel*/}
                      <Marker
                          key={filterKey}
                          icon={new L.Icon({
                              iconUrl: MarkerIcon.src,
                              iconSize: [30, 30],
                              iconAnchor: [20, 20],
                              popupAnchor: [0, -41]
                          })}
                          position={[48.0311864,-1.7522039,17]}
                      >
                              <Popup>
                                  <a
                                      href="https://www.sengager.fr/regiments/2e-regiment-du-materiel"
                                      target="_blank"
                                      rel="noreferrer"
                                  >
                                      2e Régiment du Matériel
                                  </a>
                              </Popup>
                          </Marker>
                          
                            {/*COMSIC*/}
                            <Marker
                                key={filterKey}
                                icon={new L.Icon({
                                    iconUrl: MarkerIcon.src,
                                    iconSize: [30, 30],
                                    iconAnchor: [20, 20],
                                    popupAnchor: [0, -41]
                                })}
                                position={[48.1209786,-1.6301283,17]}
                            >
                                <Popup>
                                    <a
                                        href="https://www.defense.gouv.fr/terre/nos-unites/niveau-divisionnaire/commandement-sic"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        COMSIC (Commandement des SIC)
                                    </a>
                                </Popup>
                            </Marker>

                            {/*6E RÉGIMENT DU GÉNIE*/}
                            <Marker
                                key={filterKey}
                                icon={new L.Icon({
                                    iconUrl: MarkerIcon.src,
                                    iconSize: [30, 30],
                                    iconAnchor: [20, 20],
                                    popupAnchor: [0, -41]
                                })}
                                position={[48.1209786,-1.6301283,17]}
                            >
                                <Popup>
                                    <a
                                        href="https://www.sengager.fr/regiments/6e-regiment-du-genie"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        6e Régiment du Génie
                                    </a>
                                </Popup>
                            </Marker>
                          </>
                  );
                default:
                  return null;
              }
            })}
          </LayerGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default Carte;

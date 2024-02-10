
'use client'
import React, { useState } from "react";
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

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const filters = [
    { name: "Bases Armée de Terre", key: "armeeTerre" },
    { name: "Bases Marine Nationale", key: "marineNationale" },
    { name: "Bases Armée de l'Air", key: "armeeAir" }
  ];

  return (
    <div className="carte_container">
      <p>Carte</p>
      <div className="filtre_container">
        <h3>Filtres :</h3>
        <ul className="filtres">
          {filters.map((filter) => (
            <li key={filter.key}>
              <label>
                <input
                  type="checkbox"
                  value={filter.key}
                  checked={selectedFilters.includes(filter.key)}
                  onChange={(e) => {
                    const { value } = e.target;
                    setSelectedFilters((prevFilters) =>
                      prevFilters.includes(value)
                        ? prevFilters.filter((f) => f !== value)
                        : [...prevFilters, value]
                    );
                  }}
                />
                {filter.name}
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
                case "armeeTerre":
                  return (
                    <Marker
                      key={filterKey}
                      icon={
                        new L.Icon({
                          iconUrl: MarkerIcon.src,
                          iconSize: [30, 30],
                          iconAnchor: [20, 20],
                          popupAnchor: [0, -41]
                        })
                      }
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
                  );
                // Ajoutez d'autres cas pour les filtres supplémentaires ici
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

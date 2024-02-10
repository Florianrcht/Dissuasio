'use client'

import  L  from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

const Carte = () => {
    const mapboxStyleUrl = 'https://api.mapbox.com/styles/v1/florianrcht/clsg8r9fi005c01qudnepavb2.html?title=view&access_token=pk.eyJ1IjoiZmxvcmlhbnJjaHQiLCJhIjoiY2xka2p4NG5pMXdoZDNwdDU0ampyMnN6NSJ9.3RuMtRpGhlzYW-W9the7vA&zoomwheel=true&fresh=true#11/40.73/-74'

  return (
    <div>
      <p>Carte</p>
      <MapContainer style={{
        height: "100vh",
        width: "100%"
      }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}
      >
      <TileLayer
        url={mapboxStyleUrl}
        attribution='Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
      />

        <Marker icon={
            new L.Icon({
                iconUrl: MarkerIcon.src,
                iconRetinaUrl: MarkerIcon.src,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [0, -41],
                shadowUrl: MarkerShadow.src,
                shadowSize: [41, 41],
            })
            } position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Carte
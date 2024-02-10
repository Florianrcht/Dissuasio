'use client'

import  L  from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

const Carte = () => {
  return (
    <div>
      <p>Carte</p>
      <MapContainer style={{
        height: "100vh",
        width: "100%"
      }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}
      >
        <TileLayer 
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
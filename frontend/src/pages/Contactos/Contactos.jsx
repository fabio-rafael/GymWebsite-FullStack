import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contactos.css";

function Contactos() {
  // Coordenadas fictícias no meio do oceano
  const oceanLocation = [32, -8];

  return (
    <div className="contactos">
      <div className="contactos-info">
        <h2>Informações de Contacto</h2>
        <p>Email: exemplo@dominio.com</p>
        <p>Telefone: (+351) 123-456-789</p>
        <p>Endereço: Rua 1, 12345-678</p>
        <p>Portugal</p>
      </div>

      <div className="hr-vertical"></div>

      <div className="location">
        <h2>Localização Fictícia</h2>
        <MapContainer
          center={oceanLocation}
          zoom={2}
          style={{ width: "600px", height: "350px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={oceanLocation}>
            <Popup>Localização Fictícia</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Contactos;

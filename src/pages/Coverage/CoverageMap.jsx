// CoverageMap.jsx
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CoverageMap.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [18, 30],
  iconAnchor: [9, 30],
  popupAnchor: [0, -25],
  shadowSize: [30, 30],
});

// Component to programmatically update the map center
const MapCenter = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, 16, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [center, map]);

  return null;
};

const CoverageMap = ({ searchPosition, data }) => {
  const defaultPosition = [24.01, 90.4125];

  if (!Array.isArray(data)) return <p>Loading...</p>;

  return (
    <MapContainer
      center={defaultPosition}
      zoom={7}
      style={{ height: "550px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapCenter center={searchPosition} />
      {data.map((item) => (
        <Marker
          key={item.id}
          position={[item.latitude, item.longitude]}
          icon={customIcon}
        >
          <Popup>
            <div className="flex flex-col items-center">
              <span className="text-primary font-semibold leading-1 tracking-wide mb-2">
                {item.city}
              </span>
              <span className="text-sm text-secondary text-center">
                {item.covered_area.join(", ")}
              </span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CoverageMap;

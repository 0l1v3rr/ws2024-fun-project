import GoogleMapReact from "google-map-react";
import MapHeader from "./components/MapHeader";
import MapMarker from "./components/MapMarker";
import MapMarkerModal from "./components/MapMarkerModal";
import { useState } from "react";

const restaurants = [
  {
    name: "PRAIRIAL • Confluence",
    slogan: "Haute French restaurant",
    description:
      "Tasting menus featuring seasonal, local ingredients, plus organic wine, in an elegant dining room.",
    lat: 45.74148861378931,
    lng: 4.822910843163569,
  },
  {
    name: "L'Atelier des Augustins",
    slogan: "Fine dining restaurant",
    description:
      "Inventive dishes, wine pairing & a surprise tasting menu in a snug space with modern furnishings.",
    lat: 45.76808289932464,
    lng: 4.83079058392433,
  },
  {
    name: "Le Neuvième Art",
    slogan: "Restaurant",
    description:
      "Tasting menus of inventive, artfully plated modern French cuisine, in a sleek, pastel-hued space.",
    lat: 45.76844439122307,
    lng: 4.8562424135546225,
  },
  {
    name: " Burgundy by Matthieu",
    slogan: "Fine dining restaurant",
    description:
      "Tasting menus of artfully plated contemporary dishes, with wine pairings, in a muted, elegant space.",
    lat: 45.7631803907512,
    lng: 4.831815700144996,
  },
];

function App() {
  const [activeMarker, setActiveMarker] = useState<any>(null);

  const defaultProps = {
    center: {
      lat: 45.75435927133584,
      lng: 4.846746272650905,
    },
    zoom: 14,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhdQFf0dj7Glu61svDKL7_3bFuOG93UJA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {restaurants.map((restaurant) => (
          <MapMarker
            key={restaurant.name}
            lat={restaurant.lat}
            lng={restaurant.lng}
            name={restaurant.name}
            description={restaurant.description}
            slogan={restaurant.slogan}
            onClick={() => {
              setActiveMarker(restaurant);
            }}
          />
        ))}
      </GoogleMapReact>

      <MapHeader restaurants={restaurants} />

      <MapMarkerModal
        marker={activeMarker}
        open={!!activeMarker}
        onClose={() => {
          setActiveMarker(null);
        }}
      />
    </div>
  );
}

export default App;

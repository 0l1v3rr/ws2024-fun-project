import { FC } from "react";
import { IoMdRestaurant } from "react-icons/io";

interface MapMarkerProps {
  lat: number;
  lng: number;
  name: string;
  description: string;
  slogan: string;
  onClick: () => void;
}

const MapMarker: FC<MapMarkerProps> = ({ name, onClick }) => {
  return (
    <div className="map-marker-container" onClick={onClick}>
      <div className="map-marker">
        <div className="marker-inside">
          <IoMdRestaurant />
        </div>
      </div>
      <span>{name}</span>
    </div>
  );
};

export default MapMarker;

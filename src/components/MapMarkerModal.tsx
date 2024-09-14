import { IoMdClose } from "react-icons/io";

interface ModalProps {
  marker: any;
  open: boolean;
  onClose: () => void;
}

const MapMarkerModal: React.FC<ModalProps> = ({ marker, open, onClose }) => {
  return (
    <div className={`modal ${open ? "active" : ""}`}>
      <div className="modal-dialog">
        <div className="modal-actions">
          <button type="button" onClick={onClose}>
            <IoMdClose />
          </button>
        </div>

        {open && (
          <>
            <img src={"https://picsum.photos/600/600"} alt={marker.name} />

            <h1>{marker.name}</h1>
            <span>{marker.slogan}</span>

            <p>{marker.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default MapMarkerModal;

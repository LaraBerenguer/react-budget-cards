import React from 'react';
import ModalData from './ModalData';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    idNumber: number;
}

const InfoModal: React.FC<ModalProps> = ({ isOpen, onClose, idNumber }) => {

    return (
        <dialog id="page_modal" className={`modal transition-opacity duration-300 ${isOpen ? "modal-open opacity-100" : "opacity-0"}`}>
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}> ✕ </button>
                <h3 className="font-bold text-lg">{ModalData[idNumber-1].title}</h3>
                <p className="py-4">{ModalData[idNumber-1].description}</p>
            </div>
        </dialog>
    );

}; export default InfoModal;
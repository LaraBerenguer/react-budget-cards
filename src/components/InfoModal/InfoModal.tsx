import React from "react";
import { useState } from "react";

interface InfoModalProps {
    open: boolean;
    onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ open, onClose }) => {
    console.log("InfoModal render with open:", open); // Verifica el valor de `open`
    if (!open) return "";

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            
            <div className="bg-white p-6 rounded-2xl shadow-lg relative z-10 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4">Number of Languages</h1>
                <p className="mb-4">
                    Choose how many languages you'll have in your project. Each
                    language is 30€.
                </p>
                <button
                    onClick={onClose}
                    className="bg-custom-purple hover:bg-dark-purple text-white py-2 px-4 rounded"
                >
                    Ok!
                </button>
            </div>
        </div>
    );
};

export default InfoModal;
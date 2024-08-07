import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DialogueContext = createContext(null);
export const DialogueProvider = ({children}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    const openModal = (type) => {setModalOpen(true);
        setModalType(type);
    }
    const closeModal = () => setModalOpen(false);
    

    const value = { isModalOpen, openModal, closeModal, modalType }

    return (
        <DialogueContext.Provider value={value}>
           {children}
        </DialogueContext.Provider>
    )
};

DialogueProvider.propTypes = {
    children: PropTypes.node
}

import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SelectPlayerContext = createContext(null);
export const SelectPlayerProvider = ({children}) => {
    const [isSelectOpen, setSelectOpen] = useState(false);

    const openSelect = () => setSelectOpen(true);
    const closeSelect = () => setSelectOpen(false);

    const value = {isSelectOpen, openSelect, closeSelect};

    return (
        <SelectPlayerContext.Provider value={value}>
            {children}
        </SelectPlayerContext.Provider>
    )
}

SelectPlayerProvider.propTypes = {
    children: PropTypes.node
}
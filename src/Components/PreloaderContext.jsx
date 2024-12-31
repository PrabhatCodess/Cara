import React, { createContext, useState, useContext } from 'react';

const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
    const [isPreloaderVisible, setPreloaderVisible] = useState(true);

    return (
        <PreloaderContext.Provider value={{ isPreloaderVisible, setPreloaderVisible }}>
            {children}
        </PreloaderContext.Provider>
    );
};

export const usePreloader = () => useContext(PreloaderContext);

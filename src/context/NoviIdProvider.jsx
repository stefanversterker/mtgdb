import { createContext, useContext } from "react";

const NoviIdContext = createContext();

export const NoviIdProvider = ({ children }) => {
    //Je eigen project ID gebruiken? Vervang dan de ID hieronder door je eigen ID.
    const noviId = "b8985a1c-c1b7-4c00-9777-666019e0877d";

    return (
        <NoviIdContext.Provider value={{ noviId }}>
            {children}
        </NoviIdContext.Provider>
    );
};

export const useNoviId = () => useContext(NoviIdContext);
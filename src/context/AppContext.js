import React, { createContext } from 'react';

export const UserContext = createContext()

const AppContext = ({children}) => {
    return (
        <UserContext.Provider value={{
            
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default AppContext;
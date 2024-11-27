import { createContext, useContext, useEffect } from "react";

export const AuthContext = createContext(null)
const ContextProvider = ({children}) => {
    useEffect(()=>{
        
    },[])
    const info = {}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
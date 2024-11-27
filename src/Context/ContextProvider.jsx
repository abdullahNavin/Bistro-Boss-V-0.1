import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const info = {user}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
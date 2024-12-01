import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loding, setLoding] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoding(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const info = { user, loding }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
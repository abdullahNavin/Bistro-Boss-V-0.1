import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import useaxiosPublic from "../Hook/useaxiosPublic";

export const AuthContext = createContext(null)
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loding, setLoding] = useState(true)
    const axiosPublic = useaxiosPublic()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            if (user) {
                const userInfo = { email: user.email }
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('accessToken',res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem('accessToken')
            }

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
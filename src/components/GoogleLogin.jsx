import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import useaxiosPublic from "../Hook/useaxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const provider = new GoogleAuthProvider()
    const axiosPublic = useaxiosPublic()
    const navigate = useNavigate()
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email
                }
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate('/')
                        }
                    })
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="divider"></div>
            <button onClick={handleGoogle} className="bg-blue-700 w-full text-center text-white py-2 px-3 rounded-md">Login with Google</button>
        </div>
    );
};

export default GoogleLogin;
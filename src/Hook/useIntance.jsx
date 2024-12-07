import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.config';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useIntance = () => {
    const navigate = useNavigate()
    // add request interceptor
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('accessToken')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, (error) => {
        return Promise.reject(error)
    })

    // add response interceptor
    axiosSecure.interceptors.response.use((response) => {
        return response
    }, async (error) => {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
            await signOut(auth)
            navigate('/Login')
        }
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useIntance;
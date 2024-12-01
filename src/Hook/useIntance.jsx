import axios from 'axios';

const useIntance = () => {
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return axiosSecure;
};

export default useIntance;
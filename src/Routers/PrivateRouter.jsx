import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';

const PrivateRouter = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()
    if (loding) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            ></DNA>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/Login'} state={location.pathname}></Navigate>
};

export default PrivateRouter;
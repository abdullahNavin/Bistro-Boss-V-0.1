import React from 'react';
import useAdmin from '../Hook/useAdmin';
import { useNavigate } from 'react-router-dom';

const AdminRouter = ({children}) => {
    const {isAdmin,isPending}=useAdmin()
    const navigate = useNavigate()
    if(isPending){
        return <p>Loding...</p>
    }
    if(isAdmin){
        return children
    }
    return navigate('/')
};

export default AdminRouter;
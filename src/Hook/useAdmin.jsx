import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useIntance from './useIntance';
import useAuthContext from './useAuthContext';

const useAdmin = () => {
    const { user } = useAuthContext()
    const axiosSecure = useIntance()
    const { data: isAdmin, isPending } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            // console.log(res.data);
            return res.data.admin

        }
    })
    return { isAdmin, isPending }
};

export default useAdmin;
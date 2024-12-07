import React from 'react';
import useIntance from '../../../Hook/useIntance';
import { useQuery } from '@tanstack/react-query';
import Title from '../../Share/Title';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useIntance()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data
        }
    })

    const handleDelete = (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${email}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 2000
                            });
                            refetch()
                        }
                    })
                    .catch(error => console.log(error.message))

            }
        });
    }

    const handleUserRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "Updated!",
                                text: "This user is now admin.",
                                icon: "success",
                                timer: 2000
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='bg-gray-300 h-full w-full px-10'>
            <Title subHeading={'All users'} heading={'manage al users'} my={true}></Title>
            <div className='bg-white p-6'>
                <div>
                    <h1 className='text-2xl font-semibold'>Total users: {users.length}</h1>
                </div>
                <div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        {
                                            item.role === 'admin' ? 'Admin' :
                                                <button onClick={() => handleUserRole(item._id)}><FaUser></FaUser></button>
                                        }
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item.email)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
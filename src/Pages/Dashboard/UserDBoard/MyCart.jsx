import React from 'react';
import Title from '../../Share/Title';
import useCartData from '../../../Hook/useCartData';
import Swal from 'sweetalert2';
import useIntance from '../../../Hook/useIntance';

const MyCart = () => {
    const { data, refetch } = useCartData()
    const totalPrice = data.reduce((total, item) => total + item.price, 0)
    const axionSecure = useIntance()
    const handleDelete = (id) => {
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
                axionSecure.delete(`/cart/${id}`)
                    .then(res => {
                        console.log(res.data);
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
    return (
        <div className='bg-gray-300 px-9 py-9 h-full'>
            <Title subHeading={'My cart'} my={true} heading={'wanna add more'}></Title>
            <div className='bg-white p-8 '>
                <div className='flex justify-between'>
                    <h1 className='uppercase textxl font-bold'>totall order: {data.length}</h1>
                    <h1 className='uppercase textxl font-bold'>totall price: {totalPrice}</h1>
                    <button className='bg-[#d1a054] py-1 px-3 rounded'>pay</button>
                </div>
                <div>
                    <div className="overflow-y-auto max-h-[370px]">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    data.map(item => <tr key={item._id}>
                                        <th>
                                            {data.indexOf(item) + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item.image}
                                                            alt="menu image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>${item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">Delete</button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
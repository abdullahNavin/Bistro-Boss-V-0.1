import React from 'react';
import useAuthContext from '../../Hook/useAuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useIntance from '../../Hook/useIntance';
import useCartData from '../../Hook/useCartData';

const ShopMenu = ({ items }) => {
    const { image, name, recipe, price, _id } = items
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuthContext()
    const axiosSecure = useIntance()
    const { refetch } = useCartData()

    const handleOrder = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price

            }
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to cart successfuly`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch()
                    }
                })
                .catch(error => console.log(error))
        }
        else {
            Swal.fire({
                title: "You want to login?",
                text: "For add to cart you have to login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Login', { state: location.pathname })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="menu" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleOrder} className="btn btn-primary">order now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopMenu;
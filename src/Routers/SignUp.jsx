import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.config';
import Swal from 'sweetalert2';
import useaxiosPublic from '../Hook/useaxiosPublic';
import GoogleLogin from '../components/GoogleLogin';


const SignUp = () => {
    const navigate = useNavigate()
    const axiosPublic = useaxiosPublic()
    const handleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                })
                    .then(res => {
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        axiosPublic.post('/user', userInfo)
                            .then(res => {
                                console.log(res.data);
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sign up successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered outline-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image url</span>
                        </label>
                        <input type="text" name="image" placeholder="image url" className="input input-bordered outline-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered outline-none" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered outline-none" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <GoogleLogin></GoogleLogin>
                        <p>Alrady have an account <Link className="text-yellow-600" to={'/Login'}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
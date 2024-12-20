import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase.config";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Loging successfully",
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate(location.state || '/')
                form.reset()
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleForm} className="card-body">
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
                        <p>Don't have an account <Link className="text-yellow-600" to={'/SignUp'}>Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
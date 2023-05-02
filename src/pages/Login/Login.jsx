import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation } from 'react-router';


const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("LoginPage",location);
    const from = location.state?.from?.pathname || "/";

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess(loggedUser);
                console.log(loggedUser);
                form.reset();
                navigate(from, {replace: true});

            })
            .catch(error => {
                setError(error);
                console.log(error.message);
                return;
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                setSuccess(loggedUser);
                console.log(loggedUser);
            })
            .catch(error => {
                setError(error);
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            setSuccess(loggedUser);
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error);
            console.log(error);
        })
    }
    
    return (
        <div className="hero min-h-screen my-10">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body pb-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered rounded-lg" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered rounded-lg" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn rounded-lg md:px-6 border-0 bg-[#b40839] hover:bg-[#7f0427]">Login</button>
                    </div>
                </form>
                <Link to="/register" className="label-text-alt link link-hover ms-8 mb-4">
                    New To The Cuisine? Please Register
                </Link>

                <div className="divider mx-4">OR</div>

                <div className="grid gap-4 card place-items-center mx-8">
                    <button onClick={handleGoogleSignIn} className='btn btn-outline rounded-lg w-full border-2 border-[#b40839] hover:bg-[#7f0427]'>Google Login</button>
                    <button onClick={handleGithubSignIn} className='btn btn-outline rounded-lg w-full border-2 border-[#b40839] hover:bg-[#7f0427]'>Github Login</button>
                </div>
                <br />
                {success &&
                    <h5 className="text-center text-success py-2">
                        LogIn successfully done!
                    </h5>
                }
                {error &&
                    <h5 className="text-center text-danger py-2">
                        {error}
                    </h5>
                }
            </div>
        </div>
    );
};

export default Login;

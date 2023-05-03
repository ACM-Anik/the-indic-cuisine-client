import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation } from 'react-router';
import { updateProfile } from "firebase/auth";


const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password length must be 6 digits or longer');
            return;
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setError('Invalid email');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('');
                navigate(from, {replace: true});
                form.reset();
                updateUserData(loggedUser, name, photo);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    }

    const updateUserData = (user, name, photo) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(()=>{ })
        .catch(error => {
            setError(error.message);
        }
     );
    }


    return (
        <div className="hero min-h-screen py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register!</h1>
                    <p className="py-6">To explore all the features you have to register first. For registration give your information here.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered rounded-lg" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo"placeholder="Photo URL" className="input input-bordered rounded-lg"/>
                        </div>
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
                            <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                        </label>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Remember me</span>
                                <input type="checkbox"  className="checkbox " />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-lg border-0 bg-[#b40839] hover:bg-[#7f0427]">Register</button>
                        </div>
                        <p className='text-error'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
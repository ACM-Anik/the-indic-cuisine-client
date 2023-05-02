import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            setError('Password length must be 6 digits or longer');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200 py-10">
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
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered rounded-lg" required />
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
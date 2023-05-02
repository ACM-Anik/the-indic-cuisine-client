import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid';
import bg from "../../assets/images/indian-cuisine.jpg";

const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-sari-indian-food_23-2148747657.jpg?t=st=1682980333~exp=1682980933~hmac=8ab36bdd53b01f366b095c6a65384cff20dff2cdd5d5f055b86e5c6f42e09b6a")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex flex-col items-center justify-center px-5 my-8">
            <FaceFrownIcon className='w-40 h-40' />
            <div className='max-w-md text-center'>
                <h2 className='mb-8 font-extrabold text-7xl'>
                    {status || 404}
                </h2>
                <p className='text-2xl font-semibold md:text-3xl  mb-8'>
                    {error?.message}
                </p>
                <Link to='/' className='btn rounded-lg bg-[#b40839] hover:bg-[#7f0427]'>
                    Back to homepage
                </Link>
            </div>
        </div>
    </div>
</div>
       
    );
};

export default ErrorPage;

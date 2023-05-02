import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid';
import bg from "../../assets/images/indian-cuisine.jpg";

const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url("../../assets/images/indian-cuisine.jpg")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex flex-col items-center justify-center px-5 my-8">
            <FaceFrownIcon className='w-40 h-40 color-gradient' />
            <div className='max-w-md text-center'>
                <h2 className='mb-8 font-extrabold text-7xl color-gradient'>
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

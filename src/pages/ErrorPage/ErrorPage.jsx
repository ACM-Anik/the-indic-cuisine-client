import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid';

const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <FaceFrownIcon className='w-40 h-40 color-gradient' />
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-7xl color-gradient'>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl  mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn bg-[#b40839] hover:bg-[#7f0427]'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
import React, { useEffect, useState } from 'react';
import AllChefs from '../Chefs/AllChefs/AllChefs';
import IndicFamily from './IndicFamily';
import NewlyInvented from './NewlyInvented';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch("https://the-indic-cuisine-server-acm-anik.vercel.app/chefs")
            .then(res => res.json())
            .then(data => setChefs(data));
    }, []);


    return (
        <div className=''>
            {/* Banner */}
            <section>
                <div className="hero min-h-fit rounded" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/top-view-indian-food-spices_23-2148747592.jpg?w=740")`, height: '600px' }}>
                    <div className=" bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold">The Best Cuisine Ever</h1>
                            <p className="mb-5">When you eat food with your family and friends, it always tastes better! Never break a promise! On the other hand, you can break as many pie crust as you want.</p>
                            <button className="btn rounded-lg px-6 border-0 bg-[#b40839] hover:bg-[#7f0427]">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        {/* All The Best Chefs */}
            <section className='my-20 mx-auto'>
                <div className='my-8'>
                    <h1 className='text-5xl font-bold text-center my-3'>All The Best Chefs</h1>
                    <p className='text-center font-semibold'>They are the best among the best chefs in The Indic Cuisine.</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {chefs?.map(singleChef =>
                        <AllChefs
                            key={singleChef.id}
                            singleChef={singleChef}
                        ></AllChefs>

                    )}
                </div>
            </section>
            {/* Indic Family */}
            <section className='my-16 mx-auto'>
                <IndicFamily></IndicFamily>
            </section>
            {/* Newly Invented */}
            <section className='my-16'>
                <NewlyInvented></NewlyInvented>
            </section>
        </div>
    );
};

export default Home;
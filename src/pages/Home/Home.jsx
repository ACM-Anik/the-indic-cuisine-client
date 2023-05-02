import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then(res => res.json())
            .then(data => setChefs(data));
    }, [])

    return (
        <div>
            {/* Banner */}
            <section>
                <div className="hero min-h-fit rounded" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/top-view-indian-food-spices_23-2148747592.jpg?w=740")`, height: '600px' }}>
                    <div className=" bg-opacity-90"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-7xl font-bold">The Best Cuisine Ever</h1>
                            <p className="mb-5">When you eat food with your family and friends, it always tastes better! Never break a promise! On the other hand, you can break as many pie crust as you want.</p>
                            <button className="btn rounded-lg px-6 border-0 bg-[#b40839] hover:bg-[#7f0427]">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-20 mx-auto'>
                <h1 className='text-5xl font-bold text-center my-6'>All The Best Chefs</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {chefs?.map(singleChefs =>
                        <div className="card md:w-96 lg:w-[400px] mx-2 bg-base-100 shadow-xl">
                            <figure><img src="https://img.freepik.com/free-photo/top-view-sari-indian-food_23-2148747657.jpg?t=st=1682980333~exp=1682980933~hmac=8ab36bdd53b01f366b095c6a65384cff20dff2cdd5d5f055b86e5c6f42e09b6a" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{singleChefs.name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <Link to={`/chefsRecipes/${singleChefs.id}`} className="card-actions justify-end">
                                    <button className="btn rounded-lg md:px-6 border-0 bg-[#b40839] hover:bg-[#7f0427]">View Recipes</button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
// {singleChefs.picture}

// https://img.freepik.com/free-photo/indian-condiments-with-copy-space-view_23-2148723492.jpg?w=826&t=st=1682979468~exp=1682980068~hmac=0217a8d4c29c2b3155153d894aa55ffdf352a6e10dcce02ab8b33e8d26aa144e

// https://img.freepik.com/free-photo/top-view-sari-indian-food_23-2148747657.jpg?t=st=1682980333~exp=1682980933~hmac=8ab36bdd53b01f366b095c6a65384cff20dff2cdd5d5f055b86e5c6f42e09b6a
export default Home;
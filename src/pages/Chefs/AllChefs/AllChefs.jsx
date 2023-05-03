import React from 'react';
import { Link } from 'react-router-dom';

const AllChefs = ({ singleChef }) => {
    const { id, name, picture, yearsOfExperience, numberOfRecipes, likes} = singleChef;

    return (
        <div className="card md:w-96 lg:w-[400px] mx-2 bg-base-100 shadow-xl">
            <figure className='mx-5 mt-5 rounded'><img style={{ height: "280px" }} src={picture} alt="chefs" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <div className='flex justify-between gap-6'>
                    <div>
                        <p className='font-semibold'>Experience: {yearsOfExperience} years</p>
                        <p className='font-semibold'>Recipes: {numberOfRecipes}+</p>
                    </div>
                    <p className='font-semibold'>Likes: {likes}+</p>
                </div>
                <Link to={`/chefsRecipes/${id}`} className="card-actions justify-end">
                    <button className="btn rounded-lg md:px-6 border-0 bg-[#b40839] hover:bg-[#7f0427]">View Recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default AllChefs;
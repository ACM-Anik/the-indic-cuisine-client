import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import RecipesDetails from '../RecipesDetails/RecipesDetails';

const ChefsRecipes = () => {
    const { id } = useParams();
    const allChefs = useLoaderData();
    const { name, picture, yearsOfExperience, numberOfRecipes, likes, description, recipes } = allChefs;

    return (
        <section>
            <div className="hero h-[500px] bg-base-200 rounded">
                <div className="hero-content flex-col lg:flex-row">
                    <img style={{width:"600px"}} src={picture} className="max-h-80 rounded-lg shadow-xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-xl font-semibold">{description}</p>
                        <div className='md:flex items-center gap-10'>
                            <div>
                                <p className='text-xl font-semibold'>Experience: {yearsOfExperience} years</p>
                                <p className='text-xl font-semibold'>Recipes: {numberOfRecipes}+ recipes</p>
                                <p className='text-xl font-semibold'>Likes: {likes}+</p>
                            </div>
                            <button className="btn px-6 btn-outline rounded-lg border-2 text-[#7f0427] border-[#7f0427] hover:bg-[#7f0427] ">For More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1000px] mx-auto my-20'>
                <h1 className='text-5xl font-bold text-center mt-16 mb-10 '>Chef's <span className='text-[#b40839]'>Unique</span> Recipes</h1>
                {
                    recipes?.map(singleRecipe =>
                        <RecipesDetails
                            key={singleRecipe.recipe_id}
                            singleRecipe={singleRecipe}
                        ></RecipesDetails>)
                }
            </div>
        </section>
    );
};

export default ChefsRecipes;
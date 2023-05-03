import React, { useState } from 'react';
import toast from 'react-hot-toast';

const RecipesDetails = ({ singleRecipe }) => {
    const { recipe_name, picture, how_to_cook, ingredients, rating, price } = singleRecipe;

    const [toggle, setToggle] = useState(false);
    const handleFavorite = () => {
        setToggle(true);
        toast('✅Bookmarked as favorite!');
        
    }
    
    return (
        <div className='md:grid grid-cols-2 gap-10 my-10 shadow-lg p-4'>
            <div className="">
                <h2 className='text-4xl font-bold'>{recipe_name}</h2>
                <p className='font-semibold my-5'>{how_to_cook}</p>
                <div className='md:flex gap-10'>
                    <div>
                    <p className='text-xl font-semibold'>Ingredients:</p>
                    {
                        ingredients.map((single, index) => <li key={index} className='font-semibold'>{single}</li>)
                    }
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>Price: {price}$</p>
                        <p className='text-xl font-semibold mb-4'>Rating: {rating}</p>
                        <button onClick={handleFavorite}  className={`btn-sm ${toggle ? 'btn-disabled' : ''} btn-outline rounded-lg border-2 text-[#7f0427] border-[#7f0427] hover:bg-[#7f0427] `}>Favorite</button>
                    </div>
                </div>
            </div>
            <div>
                <img src={picture} alt="recipe" />
            </div>
        </div>
    );
};

export default RecipesDetails;
import React from 'react';

const NewlyInvented = () => {
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center text-5xl font-bold mt-10 mb-3'>Our Newly Invented Recipes</h1>
                <p className='text-base font-semibold text-center'>We always try to give our consumer some different taste!.</p>
            </div>
            <div className='md:flex justify-center items-center gap-8 my-10'>
                <div>
                    <img className='rounded' src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" alt="recipe" />
                </div>
                <div>
                    <h3 className=' text-4xl font-bold'>Chicken Pheroii</h3>
                    <p className='text-base font-semibold my-3'>This is a new flavor of chicken that nobody ever tasted! Invented by Chef Ayon Mojumder.</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-8'>
                <div>
                    <h3 className=' text-4xl font-bold'>Alu Loper</h3>
                    <p className='text-base font-semibold my-3'>This is a new recipe of potato that nobody ever tasted! Invented by Chef Anik Mojumder.</p>
                </div>
                <div>
                    <img className='rounded' src="https://media.istockphoto.com/id/585765976/photo/bombay-potatoes.jpg?s=612x612&w=0&k=20&c=8ZhCNjqi2JjIgDek-eKq-k9cXH1EYOFUWVL9mnXiwjo=" />
                </div>
            </div>
        </>
    );
};

export default NewlyInvented;
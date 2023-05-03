import React from 'react';

const IndicFamily = () => {
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center text-5xl font-bold mt-10 mb-3'>Meet Our Indic Cuisine Family</h1>
                <p className='text-base font-semibold text-center'>We work like a family to give our best output to make the art of cooking perfect.</p>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative h-[580px] w-full">
                    <img src="https://media.istockphoto.com/id/458567693/photo/indian-hotel-chefs-preparing-food.jpg?s=612x612&w=0&k=20&c=vDvJjvE_SLM0lH6HKzjOeBMIcivcLv8IP0CFmPNed2k=" className="w-full object-cover rounded" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative h-[580px] w-full">
                    <img src="https://media.istockphoto.com/id/458454619/photo/indian-chefs-in-busy-hotel-kitchen.jpg?s=612x612&w=0&k=20&c=dkDMFyl0Re8T6IzZNPyx_rQATT-y_dDRSkyXuTCusMM=" className="w-full object-cover rounded" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative h-[580px] w-full">
                    <img src="https://media.istockphoto.com/id/1364935484/photo/doing-the-books-is-the-head-chefs-job.jpg?s=612x612&w=0&k=20&c=pnTZ7LARdQPhrJLcYDyvwMEApK9z0mIemoUOY_oMVUE=" className="w-full object-cover rounded" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative h-[580px] w-full">
                    <img src="https://media.istockphoto.com/id/1131410171/photo/busy-kitchen-scene-from-an-upscale-fine-dining-indian-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=ZSTjX1aXAdjb7_h7WtXL47wmOQfSqJc5ZfOJyWViK5I=" className="w-full object-cover rounded" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndicFamily;
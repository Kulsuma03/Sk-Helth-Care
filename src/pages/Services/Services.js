import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Services = ({ category }) => {
    const { img, name, id } = category;
    // console.log(img);
    
    return (
        <div className="flex flex-col max-w-lg p-2  z-20 space-y-6 overflow-hidden rounded-lg relative transition duration-300 transform bg-gray-300 text-gray-100 shadow-lg hover:-translate-y-4 hover:shadow-2xl ">
            <div>
                <img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                <h2 className='text-gray-800 text-xl font-bold'>{name}</h2>
            </div>

            <div >
                <div className='absolute inset-0 px-6 py-4 transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-80 '>
                    <Link to={`/service/${id}`} className='flex items-center justify-center w-full h-full'>
                        <BsFillArrowRightCircleFill className='text-7xl text-purple-400'></BsFillArrowRightCircleFill>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceData = ({service}) => {
    const {id, picture, name, about} = service;
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-300 text-gray-100">
            
            <div>
                <img src={picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-900" />
                <h2 className="mb-1 text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-700">
                    {about.length >= 100 ? about.slice(0, 100)+'...' : about}
                    <Link className='text-purple-500 font-bold text-xl underline' to={`/details/${id}`}>Details</Link>
                </p>
            </div>
            
        </div>
    );
};

export default ServiceData;
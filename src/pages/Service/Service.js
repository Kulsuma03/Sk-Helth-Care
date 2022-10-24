import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceData from '../ServiceData/ServiceData';

const Service = () => {
    const allService = useLoaderData([])
    return (
        <div >

            <div className='w-11/12 mx-auto bg-white'>
                <iframe className='w-full h-80 overflow-auto' id="gmap_canvas" src="https://maps.google.com/maps?q=Mymensingh%20Medical%20College&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>

            <div className="grid grid-cols-2 gap-y-7 gap-x-40 w-10/12 mx-auto mt-8">
                {
                    allService.map(service => <ServiceData
                        key={service.id}
                        service={service}
                    ></ServiceData>)
                }
            </div>
        </div>
    );
};

export default Service;
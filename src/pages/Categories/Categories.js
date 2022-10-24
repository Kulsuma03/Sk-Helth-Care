import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';



const Categories = () => {
    const categories = useLoaderData([])
    // console.log(categories);
    return (
        <div className='mt-28'>
            <div className="grid md:grid-cols-3 mt-[-50px] w-10/12 mx-auto gap-5">
                {
                    categories.map(category => <Services
                        key={category.id}
                        category={category}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default Categories;
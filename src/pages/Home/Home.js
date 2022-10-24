import React from 'react';
import background from '../../assets/images/background.jpg'
import Categories from '../Categories/Categories';

const Home = () => {
    
    return (
        <div className=''>
            <div className='bg-gradient-to-tl from-cyan-900  opacity-100 h-screen z-0 mt-[-85px] relative'>
                <img src={background} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />
            </div>
            <Categories></Categories>
        </div>
    );
};

export default Home;
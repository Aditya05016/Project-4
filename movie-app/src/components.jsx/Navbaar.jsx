import React from 'react';

export const Navbaar = () => {
  return (
    <div className='main z-20 lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#40407a] py-4 shadow-md sticky top-0'>
      
      <div className='left flex items-center space-x-3'>
        <img src='https://movie-app-88kamal.vercel.app/clipart3105859.png' alt="" className='w-10' />
        <h2 className="logo font-bold text-2xl text-white text-center">MovieMania</h2>
      </div>

      <div className='right'>
        <ul className='flex space-x-6 text-white justify-center'>
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <li 
              key={index} 
              className="cursor-pointer hover:text-yellow-400 hover:underline transition-all duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Navbaar;

import React from 'react';
import { relatedArticles } from '../assets/assets';

const Related = () => {
  return (
    <div className="w-full pt-20 bg-gray-900 px-6 p-20 md:px-40 text-white text-center h-auto">
      <h1 className="text-4xl font-bold mb-10">Related Articles</h1>
      
      <div  data-aos="zoom-in" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {relatedArticles.map((item, index) => (
          <div className="flex flex-col md:flex-row w-full p-5 items-center gap-6" key={index}>
            
            {/* Image */}
            <div className="w-full group md:w-1/2 h-60 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full group-hover:scale-110 h-full object-cover rounded-md shadow-md"
              />
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2 text-left">
              <p className="text-sm text-red-400">// {item.type}</p>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm opacity-80 mt-2">{item.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Related;

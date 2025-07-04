import React, { useState } from 'react';
import { dsa } from '../assets/assets';

const Spotlight = () => {
  const [tx, setTx] = useState(0);
  const trans=1050;
  const miniSize=300;
  const widthsize=2000;
  const maxtx=-(dsa.length*trans-widthsize)
    const maxMobile=-(dsa.length*miniSize-widthsize)

  const next = () => {
    setTx(prev=>Math.max(prev-trans,maxtx/3));
  };

  const prev = () => {
    setTx(prev=>Math.min(prev+trans,0));
  };
//size moblie//
    const nextMobile = () => {

    setTx(prev=>Math.max(prev-miniSize,maxMobile*3.5));
  };

  const prevMobile = () => {
    setTx(prev=>Math.min(prev+miniSize,0));
  }

  return (
    <div className="text-center mt-20 px-10">
      <h1 className="text-4xl font-bold px-10 mb-20 ">SPOTLIGHT</h1>
      <div className="flex items-center justify-center ">
        <i
          onClick={prev}
          className="fa-solid  opacity-0 md:opacity-100  md:block fa-arrow-right fa-flip-horizontal fa-2xl cursor-pointer"
        ></i>

        <div className="overflow-hidden w-[2000px] ">
          <div
            className="flex  md:gap-10 transition-transform duration-300 ease-in-out px-10"
            style={{ transform: `translateX(${tx}px)` }}
          >
            {dsa.map((item, index) => (
              <div
                key={index}
                className=" min-w-[300px] md:min-w-[300px] bg-gray-100 rounded-xl p-4 shadow-md"
              >
                <img
                  src={item.image}
                  alt={`img-${index}`}
                  className="w-full h-auto rounded-md mb-3 object-cover"
                />
                <h2 className="font-semibold mb-2">{item.highlight}</h2>
                <p className="text-sm text-gray-700">{item.features}</p>
                <h3 className="text-blue-500 mt-3">LEARN MORE</h3>
              </div>
            ))}
          </div>
        </div>

        <i
          onClick={next}
          className="fa-solid opacity-0 md:opacity-100  fa-arrow-right fa-2xl cursor-pointer"
        ></i>
      </div>
      <div className='flex-row md:hidden flex w-full p-5 items-center justify-center gap-5'>
        <i onClick={prevMobile} class="fa-solid  bg-red-500 p-5  rounded-full fa-xl fa-arrow-right fa-flip-horizontal"></i>
        <i  onClick={nextMobile} class="fa-solid bg-red-500 p-5 rounded-full fa-xl fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Spotlight;

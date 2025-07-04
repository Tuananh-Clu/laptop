import React, { useState } from 'react';
import { ces2025Products } from '../assets/assets';
import { ViewProduct } from '../ViewSelectionProduct';
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';

const HotProducts = () => {
  const [Data, setData] = useState(ces2025Products);
   const {filters,setFilters} =useContext(ViewProduct);
    const navigate=useNavigate();
  const handleClick=(item)=>{
    setFilters({
      series: item?.model||"",
    cpu: item?.cpu||"",
    gpu: item?.gpu||"",
    display: item?.display||"",
    battery: "",
    connectivity:"",
    storage:item?.storage||""
    })
    navigate("/AllModels")
  }

  return (
    <div data-aos="fade-up"
     data-aos-duration="1000"  className="w-full text-center mt-10 min-h-screen">
      <h1 className="text-4xl font-bold">HOT PRODUCTS</h1>

      <div className="flex flex-wrap justify-center text-center gap-8 mt-12 px-8">
        {Data.map((item, index) => (
          <div
          onClick={()=>{handleClick(item)}}
            key={index}
            className="flex flex-col items-center border border-transparent hover:border-red-500 transition-all duration-300 overflow-hidden rounded-xl shadow-md w-80 group bg-white"
          >
            <div className="w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col p-4 text-center">
              <h1 className="text-2xl font-bold mb-1">{item.name}</h1>
              <p className="text-sm text-gray-600">{item.os}</p>
              <p className="text-sm text-gray-600">{item.cpu}</p>
              <p className="text-sm text-gray-600">{item.gpu}</p>
              <p className="text-sm text-gray-600">{item.display}</p>
              <p className="text-sm text-gray-600">Nebula Display</p>
              <p className="text-sm text-gray-600">{item.ram}</p>
              <p className="text-sm text-gray-600">{item.storage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotProducts;

import React, { useContext, useState, useEffect } from 'react';
import { asusProducts } from '../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { ViewProduct } from '../ViewSelectionProduct';

const Product = () => {
  const [data, setData] = useState(asusProducts);
  const { setFilters } = useContext(ViewProduct);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  const handleClick = (item) => {
    setFilters({ series:`${item}`,gpu:"",cpu:"",display:"",connectivity:"",battery:"",storage:"" });
    navigate("/Allmodels");
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="text-center mt-20 w-full items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">LAPTOPS</h1>

      <div className="mt-2 w-full flex flex-col items-center">
        <p className="w-1/2 text-gray-600">
          ROG was founded to create the world’s best gaming devices. Our premium devices elevate gaming experiences with best-in-class displays, top-tier graphics, and innovative cooling solutions.
        </p>
        <span
          onClick={() => {
            setFilters({});
            navigate("/Allmodels");
          }}
          className="text-red-500 mt-2 cursor-pointer hover:underline"
        >
          VIEW ALL LAPTOPS
        </span>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-6 px-20 md:px-40 mt-10">
        {data.gaming.products.slice(0, 3).map((item, index) => (
          <div
            className="group w-full md:w-1/3 p-2 flex flex-col gap-3 items-center overflow-hidden animate-fade-up animate-once animate-duration-[1200ms] animate-ease-in-out animate-normal animate-fill-forwards"
            key={index}
            onClick={() => handleClick(item.name)}
          >
            <div className="w-full md:h-106 h-70 overflow-hidden rounded-md">
              <img
                className="w-full h-full object-cover transform transition duration-300 group-hover:scale-110"
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="text-center">
              <h1 className="font-bold text-2xl">{item.name}</h1>
              <h1>{item.tittle}</h1>
              <h1 className="text-gray-500">{item.display}</h1>
            </div>

            <button className="text-red-500 hover:underline">
              Learn More <i className="fa-solid fa-right-long"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

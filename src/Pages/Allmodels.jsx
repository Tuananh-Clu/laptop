import Navbar from '../components/Navbar'
import winImage from "../assets/en-us.png"
import React, { useContext, useState } from 'react'
import {ViewProduct} from '../ViewSelectionProduct'
import { useNavigate } from 'react-router-dom'

const Allmodels = () => {


  const SERIES_OPTIONS = ['ROG Flow', 'ROG Zephyrus', 'ROG Strix'];

  const GPU_OPTIONS = [
  'NVIDIA® GeForce RTX™ 5090',
  'NVIDIA® GeForce RTX™ 5080',
  'NVIDIA® GeForce RTX™ 5070 Ti',
  'NVIDIA® GeForce RTX™ 5070',
  'NVIDIA® GeForce RTX™ 5060',
  'NVIDIA® GeForce RTX™ 5050',
  'GeForce RTX™ 4090',
  'GeForce RTX™ 4080',
  'GeForce RTX™ 4070',
  'GeForce RTX™ 4060',
  'GeForce RTX™ 4050',
];

  const CPU_OPTIONS = [
  'AMD Ryzen™ AI MAX+ 395',
  'AMD Ryzen™ AI 7 350',
  'AMD Ryzen™ 9 270',
  'AMD Ryzen™ 9 9955HX3D',
  'AMD Ryzen™ 9 9955HX',
  'Intel® Core™ Ultra 9 Processor 285H',
  'Intel® Core™ Ultra 9 Processor 275HX',
  'Intel® Core™ Ultra 9 Processor 185H',
  'Intel® Core™ Ultra 7 Processor 255HX',
  'Intel® Core™ Ultra 7 Processor 255H',
  'AMD Ryzen™ AI 9 HX 370 Processor',
  'Intel® Core™ Ultra 7 Processor 155H',
  'Intel® Core™ i9 Processor 14900HX',
  'Intel® Core™ i7 Processor 14650HX',
  'AMD Ryzen™ 9 8000 Series',
  'AMD Ryzen™ 9 8945HS',
  'AMD Ryzen™ 9 8940HX',
  '13th Gen Intel® Core™ i9',
  '13th Gen Intel® Core™ i9-13980HX',
  '13th Gen Intel® Core™ i9-13900H',
  '13th Gen Intel® Core™ i5',
  '13th Gen Intel® Core™ i5-13450HX',
  'AMD Ryzen™ 9 7000 Series',
  'AMD Ryzen™ 9 7945HX3D',
  'AMD Ryzen™ 9 7945HX',
  'AMD Ryzen™ 9 7940HS',
  'AMD Ryzen™ 7 7000 Series',
  'AMD Ryzen™ 7 7735HS',
  '12th Gen Intel® Core™ i9',
  '12th Gen Intel® Core™ i9-12950HX',
  '12th Gen Intel® Core™ i9-12900H',
  '12th Gen Intel® Core™ i7',
  '12th Gen Intel® Core™ i7-12700H',
  '12th Gen Intel® Core™ i5',
  '12th Gen Intel® Core™ i5-12500H',
  'AMD Ryzen™ 9 6000 Series',
  'AMD Ryzen™ 9 6900HS',
  'AMD Ryzen™ 9 6900HX',
  '11th Gen Intel® Core™ i9',
  '11th Gen Intel® Core™ i9-11900H',
  '11th Gen Intel® Core™ i7',
  '11th Gen Intel® Core™ i7-11800H',
  '10th Gen Intel® Core™ i9',
  '10th Gen Intel® Core™ i9-10980HK',
  '10th Gen Intel® Core™ i7',
  '10th Gen Intel® Core™ i7-10875H',
  '10th Gen Intel® Core™ i7-10750H',
  '9TH Gen Intel® Core™ i7-9750H',
  'AMD Ryzen™ 9 5000 Series',
  'AMD Ryzen™ 9 5980HS',
  'AMD Ryzen™ 9 5900HS',
  'AMD Ryzen™ 9 5900HX',
  'AMD Ryzen™ 7 5000 Series',
  'AMD Ryzen™ 7 5800HS',
  'AMD Ryzen™ 7 5800H',
  'AMD Ryzen™ 9 4000 Series',
  'AMD Ryzen™ 9 4900HS',
  'AMD Ryzen™ 7 4000 Series',
  'AMD Ryzen™ 7 4800HS',
  'AMD Ryzen™ 7 4800H',
  'AMD Ryzen™ 7 3000 Series',
    'AMD Ryzen™ 7 3750H'
  ];

  const DISPLAY_SIZE_OPTIONS = ['18"', '17.3"', '16"', '15.6"', '14"', '13.4"'];

const CONNECTIVITY_OPTIONS = [
  'Type-C USB 3.2 Gen 2',
  'Type-A USB 3.2 Gen 2',
  'Type-A USB 3.2 Gen 1',
  'HDMI',
  'Thunderbolt'
];

  const BATTERY_OPTIONS = ['90Wh', '76Wh', '66Wh', '48Wh'];

  const [Newest, setNewest] = useState("");
  const [openList, setOpenList] = useState({
    series: true,
    gpu: true,
    cpu: true,
    display: true,
    connectivity: true,
    battery: true,
  });

  const toggleList = (key) => {
    setOpenList((prev) => ({ ...prev, [key]: !prev[key] }));
  };
const {Models,filters,setFilters}=useContext(ViewProduct);
const navigate=useNavigate();



  const filtered = Models.filter((item) => {
  const latest="2025";
  const  oldest=["2023","2024","2022","2021"];
    return (
    (!filters.series|| item.model.includes(filters.series)) &&
      (!filters.gpu || item.gpu.includes(filters.gpu)) &&
    (!filters.cpu || item.cpu.includes(filters.cpu))&&
     (!filters.display === 0 || item.display.includes(filters.display)) &&
     (!filters.storage === 0 || item.display.includes(filters.storage)) &&
     (!filters.connectivity === 0 || item.display.includes(filters.connectivity)) &&
    (
      (!Newest || Newest === "") ? true :
        (Newest === "Newest" && item.model.includes(latest)) ||
      (Newest === "Popular" && oldest.some(year => item.model.includes(year)))
    )
     
    );
  });
  return (
    <>
      <Navbar/>
      <div className='w-full px-10 md:px-30 mt-10 flex flex-col gap-5'>
        <div className=' flex flex-row justify-between   items-center'>
          <span className='font-bold text-2xl md:text-3xl'>{filters.series+" "+filters.gpu}</span>
          <img className='w-50' src={winImage} alt="Windows" />
        </div>
        <div className='w-full bg-gray-500 h-0.5 '></div>
        <div className='w-full flex flex-col  justify-between'>
          <div className='w-full flex-row flex items-center justify-between'>
            <h1>{filtered.length} Products</h1>
            <h1>Soft By :
              <select className='outline-none ' value={Newest} onChange={(e)=>{setNewest(e.target.value)}} >
                <option value={"Newest"}>Newest</option>
                <option value={"Popular"}>Most Popular</option>
              </select>
            </h1>
          </div>
          <span className='flex md:flex-row flex-wrap gap-1 '>
            <div className={`${filters.series.length===0?"":"bg-black text-white p-4 rounded-2xl flex flex-row items-center justify-center gap-5"}`}>
              <h1 className='cursor-pointer' onClick={()=>{setFilters(prev => ({...prev, series:""}))}}>{filters.series}</h1>
            </div>
            <div className={`${filters.gpu.length===0?"":"bg-black text-white p-4 rounded-2xl flex flex-row items-center justify-center gap-5"}`}>
              <h1 className='cursor-pointer'  onClick={()=>{setFilters(prev => ({...prev, gpu:""}))}}>{filters.gpu}</h1>
            </div>
            <div className={`${filters.cpu.length===0?"":"bg-black text-white p-4 rounded-2xl flex flex-row items-center justify-center gap-5"}`}>
              <h1 className='cursor-pointer' onClick={()=>{setFilters(prev => ({...prev, cpu:""}))}}>{filters.cpu}</h1>
            </div>
            <div className={`${filters.display.length===0?"":"bg-black text-white p-4 rounded-2xl flex flex-row items-center justify-center gap-5"}`}>
              <h1 className='cursor-pointer' onClick={()=>{setFilters(prev => ({...prev, display:""}))}}>{filters.display}</h1>
            </div>
            <div className={`${filters.connectivity.length===0?"":"bg-black text-white p-4 rounded-2xl flex flex-row items-center justify-center gap-5"}`}>
              <h1 className='cursor-pointer' onClick={()=>{setFilters(prev => ({...prev, connectivity:""}))}}>{filters.connectivity}</h1>
            </div>
            <div className={`${filters.storage.length===0?"":"bg-black text-white p-4 rounded-2xl flex flex-row items-center justify-center gap-5"}`}>
              <h1 className='cursor-pointer'onClick={()=>{setFilters(prev => ({...prev,storage:""}))}}>{filters.storage}</h1>
            </div>
            {filters.series.length===0&&filters.cpu.length===0&&filters.gpu.length===0&&filters.display.length===0&&filters.connectivity.length===0?"":
              <button className='border-1 cursor-pointer border-red-400 rounded-2xl p-3 flex flex-row gap-3 items-center justify-center'>Clear All<i className="fa-solid text-gray-500 fa-xmark fa-xl" onClick={()=>{setFilters({series:"",gpu:"",cpu:"",display:"",connectivity:"",battery:"",storage:""})}}></i></button>}   
          </span>
        </div>
        <div className='flex flex-col md:flex-row w-full h-screen justify-around'>
          <div className=' flex md:w-1/2 items-start mt-20 justify-start'>
            <div className=' flex flex-col gap-5 w-full cursor-pointer'>
              <div className='p-4 border-1   border-gray-400'>
                <div className='flex flex-row justify-between  items-center  ' onClick={()=>{toggleList("series")}}>
                  <h1>Series</h1>
                  {openList.series?<i className="fa-solid fa-arrow-up"></i> :<i className="fa-solid fa-arrow-up fa-flip-vertical"></i>}
                </div> 
                {openList.series?"":
                  <div className='flex flex-col '>
                    {SERIES_OPTIONS.map((item,index)=>{
                      return(
                        <label className='flex flex-row gap-2' key={index}>
                          <input checked={filters.series.includes(item)} onChange={(e)=>{setFilters((prev)=>({...prev,series:e.target.value}))}} type='checkbox' value={item}></input>
                          <span>{item}</span>
                        </label>
                      )
                    })}
                  </div>
                }
              </div>

              <div className='p-4 border-1  border-gray-400'>
                <div className='flex w-full justify-between items-center' onClick={()=>{toggleList("gpu")}}>
                  <h1>GPU</h1>
                  {openList.gpu?<i className="fa-solid fa-arrow-up"></i> :<i className="fa-solid fa-arrow-up fa-flip-vertical"></i>}
                </div>
                {openList.gpu?"":
                  <div className='flex flex-col'>
                    {GPU_OPTIONS.map((item,index)=>{
                      return(
                        <label key={index}>
                          <input checked={filters.gpu.includes(item)} onChange={(e)=>{setFilters((prev)=>({...prev,gpu:e.target.value}))}} type='checkbox' value={item}></input>
                          <span>{item}</span>
                        </label>
                      )
                    })}
                  </div>
                }
              </div>

              <div className='p-4 border-1 border-gray-400'>
                <div className='flex w-full justify-between items-center' onClick={()=>{toggleList("cpu")}}>
                  <h1>CPU</h1>
                  {openList.cpu?<i className="fa-solid fa-arrow-up"></i> :<i className="fa-solid fa-arrow-up fa-flip-vertical"></i>}
                </div>
                {openList.cpu?"":
                  <div className='flex flex-col'>
                    {CPU_OPTIONS.map((item,index)=>{
                      return(
                        <label key={index}>
                          <input checked={filters.cpu.includes(item)} onChange={(e)=>{setFilters((prev)=>({...prev,cpu:e.target.value}))}} type='checkbox' value={item}></input>
                          <span>{item}</span>
                        </label>
                      )
                    })}
                  </div>
                }
              </div >
              <div className='p-4 border-1 border-gray-400'>
                <div className='flex w-full justify-between items-center' onClick={()=>{toggleList("display")}}>
                  <h1>Display</h1>
                  {openList.display?<i className="fa-solid fa-arrow-up"></i> :<i className="fa-solid fa-arrow-up fa-flip-vertical"></i>}
                </div>
                {openList.display?"":
                  <div className='flex flex-col'>
                    {DISPLAY_SIZE_OPTIONS.map((item,index)=>{
                      return(
                        <label key={index}>
                          <input type='checkbox' checked={filters.display.includes(item)} onChange={(e)=>{setFilters((prev)=>({...prev,display:e.target.value}))}} value={item}></input>
                          <span>{item}</span>
                        </label>
                      )
                    })}
                  </div>
                }
              </div>

              <div className='p-4 border-1 border-gray-400'>
                <div className='flex w-full justify-between items-center ' onClick={()=>{toggleList("connectivity")}}>
                  <h1>CONNECTIVITY</h1>
                  {openList.connectivity?<i className="fa-solid fa-arrow-up"></i> :<i className="fa-solid fa-arrow-up fa-flip-vertical"></i>}
                </div>
                {openList.connectivity?"":
                  <div className='flex flex-col'>
                    {CONNECTIVITY_OPTIONS.map((item,index)=>{
                      return(
                        <label key={index}>
                          <input checked={filters.connectivity.includes(item)} onChange={(e)=>{setFilters((prev)=>({...prev,connectivity:e.target.value}))}} type='checkbox' value={item}></input>
                          <span>{item}</span>
                        </label>
                      )
                    })}
                  </div>
                }
              </div>
              <div className='p-4 border-1 border-gray-400'>
                <div className='flex w-full justify-between items-center' onClick={()=>{toggleList("battery")}}>
                  <h1>BATTERY</h1>
                  {openList.battery?<i className="fa-solid fa-arrow-up"></i> :<i className="fa-solid fa-arrow-up fa-flip-vertical"></i>}
                </div>
                {openList.battery?"":
                  <div className='flex flex-col'>
                    {BATTERY_OPTIONS.map((item,index)=>{
                      return(
                        <label key={index}>
                          <input checked={filters.battery.includes(item)} onChange={(e)=>{setFilters((prev)=>({...prev,battery:e.target.value}))}} type='checkbox' value={item}></input>
                          <span>{item}</span>
                        </label>
                      )
                    })}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="p-5 mt-10 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.length ? (
              filtered.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 bg-white"
                >
                  <div className="w-full cursor-pointer" onClick={() => navigate(`/Allmodels/${item.code}`)}>
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-full h-48 object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="text-center mt-4">
                    <h1 className="text-xl font-bold text-gray-800">{item.model}</h1>
                    <p className="text-gray-500">{item.code}</p>
                  </div>

                  <ul className="list-disc text-sm text-gray-600 mt-4 pl-5 text-left w-full space-y-1">
                    <li>{item.os}</li>
                    <li>{item.gpu}</li>
                    <li>{item.cpu}</li>
                    <li>{item.display}</li>
                    <li>{item.storage}</li>
                  </ul>

                  <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition duration-300">
                    Learn More
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full p-5 mt-10 md:p-10 w-full text-center text-xl text-gray-600 py-20">
                <span>❌ Not Found!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Allmodels;
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { Model } from '../assets/assets';
import Footer from "../components/Footer"
import Infoproduct from '../components/Viewproduct/infoproduct';
import Cart from '../components/Viewproduct/Cart';
import Toast from '../components/Toast';
  

const ViewProduct = () => {



  const [pic,setPic]=useState("");


//product//
const {id}=useParams();
  const product=Model.find((item)=>item.code===id);
  const [tx,setTx]=useState(0);
  const szW=400;
  const items=product.Images.length;
  const maxW=-(400*items-szW/items);
  const next=()=>{
   setTx(tx-400,maxW)
  }
  const back=()=>{
    setTx(Math.min(tx+szW,0))
  }

  return (
    <>
      <Navbar/>

      <div className='w-full flex flex-col md:flex-row gap-5 items-center justify-center px-10 mt-10'>
         <div>

              <div>
                 <img
                      className="w-[600px] mb-4 rounded-2xl"
                       src={pic || product.Images.find(img => img.id === 1)?.image}
                  alt="Ảnh chính"
                   />
                   <div className='flex flex-row items-center gap-3'>
                      <i onClick={back} class="fa-solid fa-arrow-right fa-flip-horizontal fa-xl"></i>
                <div  className='md:w-[500px] w-[300px] flex flex-row gap-10 items-center  overflow-x-hidden rounded-2xl '>
                    {product.Images.map((img,i)=>{
                      return(
                          <img onClick={()=>{setPic(img.image)}} style={{ transform: `translateX(${tx}px)` }} className=' w-[100px] object-cover hover:border-4 hover:border-red-500 transition-transform rounded-2xl' src={img.image} key={i}></img>
                    
                  )
                })}
                  </div>                  
                  
                     <i onClick={next}  class=" text-black fa-solid fa-arrow-right fa-xl"></i>

                   </div>
                 
             
            </div>

         </div>
       <div className='flex flex-col items-start justify-start'>
          <img className='w-200' src="https://vn.store.asus.com/media/wysiwyg/khuyenmai/mua-asus-premium-care-notebook-rog.jpg"></img>
          <div className='w-full p-10 '>
            <div className='w-full text-center '>
               <h1 className='text-3xl font-bold'>{product.model}</h1>
            <h1 className='text-shadow-2xs'>{product.model.includes("Flow")?"Gaming Tablet mạnh nhất thế giới":product.model.includes("Zephyrus")?"Laptop Gaming AI ROG Nebula OLED RTX 50 Series Mạnh Nhất":"Laptop Gaming Rog Mạnh Mẽ Cho Esports"}</h1>
            </div>
              <ul className=' list-disc p-10'>
                <li>OS: {product.os} bản quyền + Trọn đời Microsoft Office Home 2024 + 1 năm Microsoft 365 Basic</li>
                <li>CPU: {product.cpu}</li>
                <li>GPU: {product.gpu}</li>
                <li>RAM: {product.ram}</li>
                <li>STORAGE: {product.storage}</li>
                <li>DISPLAY: {product.display}</li>
                <li>PIN: {product.battery}</li>
              </ul>
              <div className='mt-3 flex flex-col gap-2'>
                <h1 className=''>Code Product - {product.code}</h1>
              <h1 className=' text-red-500 font-bold'>Hoàn tiền khi mua qua ShopBack</h1>
              <h1><span className='text-blue-500'>Click tại đây</span> để mua sắm qua ShopBack và nhận ngay 935.880 ₫ tiền hoàn lại khi bạn đăng nhập và thanh toán sản phẩm này!</h1>

              </div>
              
              <h1 className='w-full text-center mt-4 text-red-600'>
                <span className='font-bold'>Lưu ý:</span> Đơn hàng sau 10h thứ 6 sẽ được xử lý ở tuần tiếp theo <br/>Đánh giá sản phẩm nhận voucher UrBox 200K. Click ngay!
              </h1>
          </div>
         </div>
    
      </div>
           <Infoproduct/>
           <Cart/>
          <Footer/>
    </>
  )
}

export default ViewProduct
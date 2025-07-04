import { useContext, useEffect, useState } from 'react'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Model } from '../../assets/assets';
import { CartContext } from '../../CartContext';
import Toast from '../Toast';
const Cart = () => {
      const {id}=useParams();
        const [toast,setToast]=useState(false)
     const product=Model.find((item)=>item.code===id);
      const [iconToggle,setIconToggle]=useState(false);
      const {addToCart}=useContext(CartContext);

      const handleClick=(product)=>{
         addToCart(product)
        setToast(true)
      }
      useEffect(()=>{
        setTimeout(()=>{
          setToast(false)
        },4000)
      },[toast])
  return (
    <>
   <div className={`fixed top-5 left-1/2 -translate-x-1/2 w-full z-50 transition-all duration-500 
  ${toast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
  <Toast />
</div>
 <div className="fixed z-[1000] bottom-0 bg-white w-full border-t border-gray-300 p-4 md:px-20 md:pb-6">
  <div className="flex flex-row justify-around md:flex-row md:justify-between md:items-center gap-4">
    {/* Bảo hành & Shopback */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Bảo hành */}
      <div className="flex items-start gap-3">
        <img className="w-8 h-8" src="https://vn.store.asus.com/media/wysiwyg/32_warranty_normal_3x_1_.png" alt="Bảo hành"/>
        <div>
          <h1 className="text-sm md:text-lg font-medium">BH chính hãng</h1>
          <p className="text-xs md:text-sm text-gray-600">Bảo hành 2 năm quốc tế<br />cho Laptop và Ally</p>
        </div>
      </div>

      {/* Shopback */}
      <div className="flex items-start gap-3">
        <img className="w-8 h-8" src="https://vn.store.asus.com/static/version1750898347/frontend/Asus/vn/vi_VN/Ebrook_Shopback/images/shopback.png" alt="Shopback"/>
        <div>
          <h1 className="text-sm md:text-lg font-medium">Hoàn tiền ShopBack</h1>
          <p className="text-xs md:text-sm text-gray-600">Hoàn ngay 1.2% khi mua ASUS qua ShopBack</p>
        </div>
      </div>
    </div>

    {/* Giá + nút */}
    <div className="flex flex-col md:flex-row items-end gap-4">
      <div className="text-right md:text-left">
        <h1 className="text-xl md:text-2xl font-bold">
          {product.model.includes("Strix") ? "62.990.000 ₫" : product.model.includes("Zephyrus") ? "72.990.000 ₫" : "42.990.000 ₫"}
        </h1>
        <p className="text-sm text-gray-600">Bao gồm VAT</p>
        <p className="text-sm text-gray-600">Trả góp 0% lãi suất</p>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={() => handleClick(product)} 
          className="p-2 px-4 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded"
        >
          Thêm vào giỏ hàng
        </button>
        {iconToggle ? (
          <i 
            onClick={() => setIconToggle(prev => !prev)} 
            className="text-cyan-500 fa-solid fa-heart fa-xl cursor-pointer"
          ></i>
        ) : (
          <i 
            onClick={() => setIconToggle(prev => !prev)} 
            className="text-cyan-500 fa-regular fa-heart fa-xl cursor-pointer"
          ></i>
        )}
      </div>
    </div>
  </div>
</div>

          </>
  )
}

export default Cart
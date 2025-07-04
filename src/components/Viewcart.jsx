import { useContext, useState } from 'react'
import { CartContext } from '../CartContext'
import { Model } from '../assets/assets';
import { useParams } from 'react-router-dom';
import React from 'react';
    

const Viewcart = () => {
    const {cart,DeleteCart,DeleteAll}=useContext(CartContext);
    const [ToggleCart,setToggleCart]=useState(false)
     const {id}=useParams();
     const product=Model.find((item)=>item.code===id);
  return (
    <>
      <div className='relative h-full'>
        {/* ICON giỏ hàng */}
        <i
          onClick={() => setToggleCart(prev => !prev)}
          className="cursor-pointer fa-solid fa-cart-shopping "
        ></i>

        {/* BADGE số lượng */}
        {cart.length > 0 && (
          <div className='absolute bg-red-500 h-4 min-w-[16px] px-1 text-center right-[-10px] top-[-10px] rounded-full flex items-center justify-center'>
            <span className='text-[10px] text-white font-bold'>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
        )}

        {ToggleCart && (
          <div className='absolute top-10 right-0 z-[9999] w-80 bg-gray-800 text-white p-5 rounded-xl shadow-xl'>
            <h1 className="text-lg font-semibold mb-2">
              {cart.length > 0 ? "Giỏ Hàng Của Bạn" : "Giỏ Hàng Trống"}
            </h1>
            <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img
                    src={item.Images?.find(img => img.id === 1)?.image}
                    alt=""
                    className="w-10 h-10 object-cover"
                  />
                  <div className="flex-1">
                    <h1 className="text-sm font-medium">{item.model}</h1>
                    <div className='flex flex-row gap-3 items-center justify-start'>
                      <i className="fa-solid fa-plus"></i>
                      <h1>{item.quantity}</h1>
                      <i onClick={() => { DeleteCart(product.model) }} className="cursor-pointer fa-solid fa-minus"></i>
                    </div>
                  </div>
                  <p className="text-xs font-bold">
                    {(
                      item.model.includes("Strix")
                        ? 62900000 * item.quantity
                        : item.model.includes("Zephyrus")
                          ? 72900000 * item.quantity
                          : 42900000 * item.quantity
                    ).toLocaleString("vi-VN")}₫
                  </p>
                </div>
              ))}
            </div>

            {/* Tổng tiền */}
            {cart.length > 0 && (
              <>
                <hr className="my-3 border-gray-600" />
                <div className='flex flex-row justify-between'>
                    {cart.length === 0 ? "" : <h1 onClick={DeleteAll} className='text-red-500 cursor-pointer' >Xóa Tất Cả</h1>}
                    <h1 className="text-right font-bold">
                  Tổng:{" "}
                  {cart.reduce((sum, item) =>
                    sum + (
                      item.model.includes("Strix")
                        ? 62900000 * item.quantity
                        : item.model.includes("Zephyrus")
                          ? 72900000 * item.quantity
                          : 42900000 * item.quantity
                    ), 0
                  ).toLocaleString("vi-VN")}₫
                </h1>
                </div>
                
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}
export default Viewcart
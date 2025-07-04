import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import photoCopy from "../assets/istockphoto-1481120911-612x612.jpg";
import { CartContext } from '../CartContext';
import barcode from '../assets/pngtree-long-barcode-png-image_9016583.png';
import { useNavigate } from 'react-router-dom';

const PrintReceipt = () => {
  const time = new Date();
  const { cart ,setCart} = useContext(CartContext);
  const [currentCart,setCurrentCart]=useState([]);
  const [Print, setPrint] = useState(false);
  const navigate=useNavigate();

  const getItemPrice = (item) => {
    if (item.model.includes("Strix")) return 62900000;
    if (item.model.includes("Zephyrus")) return 72900000;
    return 42900000;
  };
  const handleClick=()=>{
    setPrint(true)
    setCurrentCart(cart)
  }
  useEffect(()=>{
    if(Print){
        setTimeout(() => {
            setCart([])
        },1000);
    }
  },[Print])
  const totalPrice = currentCart.reduce((sum, item) => {
    return sum + getItemPrice(item) * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />
      <div className='w-full  flex items-center justify-center bg-gray-100 relative'>
        <div className='flex flex-col items-center'>
          {/* Máy in */}
          <img
            onClick={() => handleClick()}
            className='w-52 h-44 cursor-pointer mb-4 hover:scale-105 transition-transform duration-300'
            src={photoCopy}
            alt="printer"
          />
          <h1 className='text-lg text-gray-700 mb-6'>Bấm vào máy in để in hóa đơn</h1>

          {/* Hóa đơn */}
          <div className={`transition-all duration-1000 ease-in-out 
            ${Print ? "translate-y-0 opacity-100 scale-100" : "-translate-y-10 opacity-0 scale-95"}
            w-[350px] bg-white p-6 rounded-xl shadow-2xl`}>
            <div className='text-center mb-4'>
              <div className='text-sm text-gray-500 border-b border-gray-300 pb-1'>HÓA ĐƠN BÁN HÀNG</div>
              <div className='text-xs text-gray-400 mt-1'>
                {`${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`}
              </div>
            </div>

            <div className='space-y-2 text-sm'>
              {currentCart.map((item, index) => (
                <div className='flex justify-between border-b border-dashed pb-1' key={index}>
                  <span className='text-gray-700'>{item.model}</span>
                  <span className='text-right font-mono font-semibold'>
                    {(getItemPrice(item) * item.quantity).toLocaleString("vi-VN")}₫
                  </span>
                </div>
              ))}
            </div>

            <div className='border-t mt-4 pt-2 text-sm flex justify-between font-bold text-gray-800'>
              <span>Tổng cộng:</span>
              <span className='text-red-600 text-base'>
                {totalPrice.toLocaleString("vi-VN")}₫
              </span>
            </div>

            <div className='text-center mt-4'>
              <h1 className='text-xs font-semibold text-gray-500'>Xin cảm ơn quý khách!</h1>
              <img className='w-32 mx-auto mt-2' src={barcode} alt="barcode" />
            </div>
          </div>
        </div>
      </div>
      {Print?
      <div className='w-full flex items-center justify-center mt-5'>
              <button onClick={()=>{navigate("/")}} className='bg-red-500 text-white rounded-2xl p-3'>Trở Về Trang Chủ</button>
      </div>
      :""}
    </>
  );
};

export default PrintReceipt;

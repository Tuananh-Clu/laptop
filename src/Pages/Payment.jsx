import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { CartContext } from '../CartContext'
import PaymentSuccess from '../components/PaymentSuccess';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { cart,setCart,DeleteAll } = useContext(CartContext)
  const [openUp,setOpenUp]=useState(true)
  const [PaySuccess,setPaySuccess]=useState(false);
  const [OpenReceipt,setOpenReceipt]=useState(true);
  const navigate=useNavigate();
  const timeCurrent=new Date();
  const handleClick = (e) => {
  e.preventDefault();
  setOpenUp(false);
  setPaySuccess(true);
  }

useEffect(() => {
  if (PaySuccess) {
    const time = setTimeout(() => {
      setPaySuccess(false);
      setOpenReceipt(false); 
    }, 3000);
    return () => clearTimeout(time);
  }
}, [PaySuccess]);

  return (
    <>
      <Navbar />
      <div className="h-auto md:h-screen bg-[#0f0f0f] text-white pt-20 px-10">
      {openUp?
        <div className="flex relative flex-col lg:flex-row justify-around gap-10 w-full">
          {/* LEFT - STATUS */}
          <div className="w-full lg:w-1/2 border  border-gray-700 bg-[#1a1a1a] p-6 rounded-2xl shadow-lg shadow-red-800/30">
            <h1 className="text-xl font-bold text-red-500 mb-4 text-center">
              Trạng Thái Đơn Hàng
            </h1>
            <div className="space-y-4 max-h-80 overflow-y-auto border border-gray-600 p-4 rounded-lg bg-[#101010]">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-gray-700 pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-20 h-16 object-contain rounded-lg"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-white">{item.model}</p>
                    <p className="text-gray-400">Số lượng: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-right text-lg font-semibold text-red-500">
              Tổng:{" "}
              {cart
                .reduce((sum, itm) => {
                  if (itm.model.includes("Strix")) {
                    return sum + 62900000 * itm.quantity
                  } else if (itm.model.includes("Zephyrus")) {
                    return sum + 72900000 * itm.quantity
                  } else if (itm.model.includes("Flow")) {
                    return sum + 42900000 * itm.quantity
                  }
                  return sum
                }, 0)
                .toLocaleString()}{" "}
              ₫
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="w-full lg:w-1/2 border border-gray-700 bg-[#1a1a1a] p-6 rounded-2xl shadow-lg shadow-red-800/30">
            <h1 className="text-xl font-bold text-red-500 mb-4 text-center">
              Phương Thức Thanh Toán
            </h1>

            {/* METHOD ICONS */}
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg hover:border-red-500 transition cursor-pointer">
                <i className="fa-brands fa-paypal text-blue-500"></i> PayPal
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg hover:border-red-500 transition cursor-pointer">
                <i className="fa-brands fa-cc-mastercard text-yellow-400"></i> MasterCard
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg hover:border-red-500 transition cursor-pointer">
                <i className="fa-brands fa-apple-pay text-white"></i> Apple Pay
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg hover:border-red-500 transition cursor-pointer">
                <i className="fa-brands fa-google-pay text-green-400"></i> Google Pay
              </div>
            </div>
            {/* FORM */}
            <form onSubmit={handleClick} className="mt-6 space-y-4 text-sm">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full">
                  <label className="block mb-1 text-gray-400">Quốc gia</label>
                  <select className="w-full p-2 bg-[#0f0f0f] border border-gray-600 rounded">
                    <option>Việt Nam</option>
                    <option>United States</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block mb-1 text-gray-400">Mã Zip</label>
                  <input
                    type="text"
                    className="w-full p-2 bg-[#0f0f0f] border border-gray-600 rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-gray-400">Tên trên thẻ</label>
                <input
                  type="text"
                  className="w-full p-2 bg-[#0f0f0f] border border-gray-600 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-400">Số thẻ</label>
                <input
                  type="text"
                  className="w-full p-2 bg-[#0f0f0f] border border-gray-600 rounded"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full">
                  <label className="block mb-1 text-gray-400">Ngày hết hạn</label>
                  <input
                    type="text"
                    className="w-full p-2 bg-[#0f0f0f] border border-gray-600 rounded"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-1 text-gray-400">CVC / CVV</label>
                  <input
                    type="text"
                    className="w-full p-2 bg-[#0f0f0f] border border-gray-600 rounded"
                  />
                </div>
              </div>

              <button
                type="submit"
                className=" cursor-pointer w-full py-3 mt-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition duration-300"
              >
                Thanh Toán & Nâng Cấp
              </button>
            </form>
          </div>
        </div>
        :""}
        {OpenReceipt?"":
       <div className="fixed inset-0 bg-black bg-opacity-80 z-[1000] flex items-center justify-center">
  <div className="w-full max-w-3xl rounded-2xl border border-red-500 bg-[#111] p-6 text-white shadow-2xl relative">
    <div className="mb-4 text-center">
      <h1 className="text-2xl font-bold text-red-500">
        <i className="fa-solid fa-receipt mr-2" /> HÓA ĐƠN THANH TOÁN
      </h1>
      <p className="text-gray-400 mt-2">
        Mã Hóa Đơn:{" "}
        <span className="text-white font-semibold">
          #{cart[0]?.code || "ROG-" + Date.now()}
        </span>
      </p>
      <p className="text-gray-400">
        Ngày Thanh Toán:{" "}
        <span className="text-white">
          {timeCurrent.getDate()}/{timeCurrent.getMonth() + 1}/
          {timeCurrent.getFullYear()}
        </span>
      </p>
    </div>

    <div className="bg-red-500 h-0.5 mb-4" />

    {/* Table */}
    <table className="w-full text-sm table-auto mb-6">
      <thead className="text-red-400 border-b border-gray-600">
        <tr>
          <th className="text-left py-2 w-1/2">Sản Phẩm</th>
          <th className="text-center py-2 w-1/6">Số Lượng</th>
          <th className="text-right py-2 w-1/3">Tổng</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => {
          let price = item.model.includes("Strix")
            ? 62900000
            : item.model.includes("Zephyrus")
            ? 72900000
            : item.model.includes("Flow")
            ? 42900000
            : 0;

          return (
            <tr key={index} className="border-b border-gray-700 hover:bg-gray-900">
              <td className="py-3 flex items-center gap-3">
                <img src={item.image} alt={item.model} className="w-14 h-14 object-contain rounded" />
                <span className="font-semibold">{item.model}</span>
              </td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-right text-red-300 font-medium">
                {(price * item.quantity).toLocaleString()}₫
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

    {/* Tổng cộng */}
    <div className="flex justify-between items-center border-t border-gray-600 pt-4">
      <h1 className="text-lg font-bold">Tổng Cộng</h1>
      <span className="text-red-500 text-xl font-bold">
        {cart
          .reduce((sum, itm) => {
            if (itm.model.includes("Strix")) {
              return sum + 62900000 * itm.quantity;
            } else if (itm.model.includes("Zephyrus")) {
              return sum + 72900000 * itm.quantity;
            } else if (itm.model.includes("Flow")) {
              return sum + 42900000 * itm.quantity;
            }
            return sum;
          }, 0)
          .toLocaleString()}₫
      </span>
    </div>
    <div className='w-full flex flex-col items-center gap-3 justify-center mt-4'>
    <h1>Thanh toán thành công</h1>
    <h1>Cảm ơn bạn đã mua hàng tại ROG Store</h1>
      <button onClick={()=>{navigate("/Receipt")}} className='w-1/3 bg-red-400 p-3 rounded-2xl'>In Hóa Đơn</button>
  </div>
  </div>  

</div>
}
{PaySuccess?
<div className='w-full h-screen absolute top-[50%] left-[50%] z-[9999] flex flex-col items-center justify-center bg-black/70 -translate-y-1/2 -translate-x-1/2 '>
     <div className=' flex flex-col items-center rounded-2xl justify-center p-5 w-1/3'>
      <h1 className='text-2xl font-bold text-green-400 '>Thanh Toán Thành Công</h1>
        <PaymentSuccess/>
    </div>

</div>

    :""}
      </div>
    </>
  )
}

export default Payment

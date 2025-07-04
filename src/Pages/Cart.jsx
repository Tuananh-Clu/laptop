import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CartContext } from '../CartContext'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {cart,updateQuantity,DeleteAll}=useContext(CartContext);
    const navigate=useNavigate();
  return (
    <>
    <Navbar/>
    
        <div className='px-30 mt-10 w-full h-auto'> 
            <h1 className='font-bold text-2xl'>{cart.length===0?"Giỏ Hàng Của Bạn Đang Trống!":"Giỏ Hàng Của Bạn"}</h1>
            {cart.length===0?"":<>
           <table className="table-auto w-full border border-gray-700 mt-5 text-white text-sm">
  <thead className="bg-gray-800">
    <tr>
      <th className="w-2/6 px-4 py-2 border">Model</th>
      <th className="w-3/6 px-4 py-2 border">Option</th>
      <th className="w-1/6 px-4 py-2 border">Quantity</th>
      <th className="w-1/6 px-4 py-2 border">Price</th>
    </tr>
  </thead>
  <tbody>
    {cart.map((item, index) => (
      <tr key={index} className="text-center border-t border-black text-black  transition">
        <td className="px-4 py-2 flex items-center gap-2 justify-center">
          <img src={item.image} alt={item.model} className="w-16 h-auto object-contain" />
          <span>{item.model}</span>
        </td>
        <td className="px-4 py-2">
          <div>{item.cpu}</div>
          <div>{item.gpu}</div>
        </td>
        <td className="px-4 py-2"><input className='w-1/2 p-5' type='number' onChange={(e)=>updateQuantity(item.id,e.target.value)} value={item.quantity} /></td>
        <td className="px-4 py-2 font-semibold">
          {item.model.includes("Strix")
            ? (62900000 * item.quantity).toLocaleString()
            : item.model.includes("Zephyrus")
            ? (72900000 * item.quantity).toLocaleString()
            : item.model.includes("Flow")
            ? (42900000 * item.quantity).toLocaleString()
            : "N/A"}₫
        </td>
      </tr>
    ))}
  </tbody>
</table>

        <div className="px-20 py-6 bg-gray-800 text-white">
  <div className="text-right">
    <h1 className=" font-semibold mb-4">
      <i onClick={()=>DeleteAll()} class="fa-solid fa-trash"></i>{" "}Tổng Cộng:{" "}
      <span className="text-red-500">
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
          .toLocaleString()}
        ₫
      </span>
    </h1>
    <div className="flex justify-end gap-4">
      <button className="bg-transparent border border-white px-6 py-2 cursor-pointer rounded-full hover:bg-white hover:text-black transition duration-300">
        % Trả Góp
      </button>
      <button onClick={()=>{navigate("/Payment")}} className="bg-red-600 px-3 py-2 rounded-full cursor-pointer hover:bg-red-700 transition duration-300">
       <i class="fa-solid fa-wallet"></i> Thanh Toán
      </button>
    </div>
  </div>
            
</div>

        </>}
         </div>
        
             
    </>

  )
}

export default Cart
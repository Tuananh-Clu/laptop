import { createContext, useEffect, useState } from "react";
import React from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart(prev => {
    const SameProduct = prev.find((item) => item.model === product.model);
    if (SameProduct) {
      return prev.map((item) =>
        item.model === product.model
          ? { 
              ...item, 
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};

useEffect(()=>{
  console.log(cart);
})
const DeleteCart = (model) => {
  setCart(prev => 
    prev.map(item =>
        item.model === model
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
}
const DeleteAll=()=>{
  setCart([]);
}
const updateQuantity = (id, quantity) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: parseInt(quantity) || 1 }
        : item
    )
  );
};

  return (
    <CartContext.Provider value={{ cart, addToCart,DeleteCart,DeleteAll,updateQuantity,setCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ViewContext.js
import { useState, createContext, useEffect, } from "react";
import React from "react";
import { Model } from "./assets/assets";



export const ViewProduct = createContext();

export const ViewProvider = ({ children }) => {


  const [Models, setModels] = useState(Model);
  const [filters, setFilters] = useState({
    series: "",
    cpu: "",
    gpu: "",
    display: "",
    battery: "",
    connectivity:"",
    storage:"",
  });
  useEffect(()=>{
    console.log(filters)
  })
  return (
    <ViewProduct.Provider value={{ Models, setModels,filters ,setFilters }}>
      {children}
    </ViewProduct.Provider>
  );
};

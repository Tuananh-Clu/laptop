import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/ASUS_ROG_2007_logo.svg.png";
import Asus from "../assets/asus-logo-hd-photo-15.png";
import { Model } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "../../firebase";
import Viewcart from "./Viewcart";
import { ViewProduct } from "../ViewSelectionProduct";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  const [login, setLogin] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const [state, setState] = useState("");
   const {filters,setFilters} =useContext(ViewProduct);


  useEffect(() => {
    const filtered = Model.filter((item) =>
      item.model.toLowerCase().includes(search.toLowerCase())
    );
    setDatas(filtered);
  }, [search]);

  useEffect(() => {
    if (openSearch) setLogin(false);
    if (login) setOpenSearch(false);
  }, [openSearch, login]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setState(user ? "Log Out" : "Log In");
    });
  }, []);

  const handleclick = () => {
    if (state === "Log Out") {
      logout();
      navigate("/Login");
    }
  };


  const handleDataSearch=(model)=>{
    setFilters({ series: `${model}`,
    cpu: "",
    gpu: "",
    display: "",
    battery: "",
    connectivity:"",
    storage:"",})
    navigate("/AllModels")
  }

  return (
    <>
      <div className='flex w-full items-center justify-between px-4 md:px-20 py-3 bg-white shadow-md z-50 relative'>
        <div className='flex items-center gap-3'>
          <img onClick={() => navigate("/")} className='w-14 md:w-20 cursor-pointer' src={Logo} alt="ROG Logo" />
        </div>

        {/* Desktop menu */}
        <ul className='hidden md:flex flex-row gap-5 font-semibold'>
          <Link to={'/AllModels'}>PRODUCTS</Link>
          <li>INNOVATION</li>
          <li onClick={() => navigate("/Cart")} className="cursor-pointer">CART</li>
          <li>COMMUNITY</li>
          <li>WHAT'S HOT</li>
          <li>SUPPORT</li>
        </ul>

        {/* Right icons */}
        <div className='flex items-center gap-3 md:gap-5'>
          <img className='w-16 md:w-20' src={Asus} alt="ASUS logo" />
          <i onClick={() => setLogin(prev => !prev)} className="cursor-pointer  fa-solid fa-circle-user"></i>
          <i onClick={() => setOpenSearch(prev => !prev)} className="fa-solid  cursor-pointer fa-magnifying-glass"></i>
          <Viewcart />
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
             <i
            className="fa-solid fa-bars  text-xl cursor-pointer"
            onClick={() => setOpenMenu(prev => !prev)}
          ></i>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {openMenu && (
        <div className="flex flex-col md:hidden bg-white text-black p-4 gap-3 shadow z-40">
          <Link to="/AllModels" onClick={() => setOpenMenu(false)}>PRODUCTS</Link>
          <span>INNOVATION</span>
          <span onClick={() => { setOpenMenu(false); navigate("/Cart"); }}>CART</span>
          <span>COMMUNITY</span>
          <span>WHAT'S HOT</span>
          <span>SUPPORT</span>
        </div>
      )}

      {/* Search bar */}
      {openSearch && (
        <div className='absolute bg-black w-full items-center flex justify-center z-40 p-5 flex-col'>
          <div className='text-white border border-white w-11/12 md:w-1/2 flex justify-between gap-5 p-4 items-center'>
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
            <input
              onChange={(e) => setSearch(e.target.value)}
              className='text-white w-full text-xl md:text-2xl outline-none bg-transparent'
              placeholder="Search products..."
            />
            <i onClick={() => setOpenSearch(false)} className="fa-solid fa-x fa-xl cursor-pointer"></i>
          </div>
          {search.trim() === "" ? (
            <ul className='text-gray-300 mt-3 w-11/12 md:w-1/2 flex cursor-pointer flex-col'>
              <li onClick={()=>{handleDataSearch("ROG OLED Monitor Campaign")}}>ROG OLED Monitor Campaign</li>
              <li onClick={()=>{handleDataSearch("ROG Strix G18 (2025) - G814")}}>ROG Strix G18 (2025) - G814</li>
              <li onClick={()=>{handleDataSearch("ROG XG Mobile (2025)")}}>ROG XG Mobile (2025)</li>
              <li onClick={()=>{handleDataSearch("ROG Keris II Origin")}}>ROG Keris II Origin</li>
              <li onClick={()=>{handleDataSearch("ROG Flow Z13 (2025)")}}>ROG Flow Z13 (2025)</li>
              <li onClick={()=>{handleDataSearch("ROG Xbox Ally")}}>ROG Xbox Ally</li>
            </ul>
          ) : datas.length > 0 ? (
            <div className="text-white mt-4 w-11/12 md:w-1/2">
              <h1 className="mb-2 font-semibold text-lg">Products</h1>
              <ul className="flex flex-col gap-2">
                {datas.slice(0, 6).map((item, index) => (
                  <li className="cursor-pointer" onClick={()=>{handleDataSearch(item.model)}}  key={index}>{item.model}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-400 text-center mt-4">No matching product found.</p>
          )}
        </div>
      )}

      {/* Login dropdown */}
      {login && (
        <div className="absolute bg-black text-white p-5 w-48 z-50 right-4 top-20 rounded shadow-lg">
          <ul className="text-center flex flex-col gap-3 cursor-pointer">
            <li onClick={handleclick}>{state}</li>
            <li>My ROG Elite Rewards</li>
            <li>My Account</li>
            <li>Product Registration</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

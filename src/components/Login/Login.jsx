import React, { useState } from 'react';
import { login, signin } from '../../../firebase';
import { useNavigate } from 'react-router-dom';

const Logins = () => {
  const [bold, setBold] = useState(false);
  const [open, setOpen] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!open && password !== rePassword) {
      alert("Mật khẩu nhập lại không khớp.");
      return;
    }
    try {
      await signin({name,email, password });
      alert("Đăng ký thành công!");
      navigate('/')
    } catch (error) {
      console.log(error.code || error.message);
    }
  };

  const handlelogin=async(e)=>{
    e.preventDefault()
    try{
      await login({email,password});
      alert("Succes")
      navigate("/")
    }
    catch(error){
      alert("ACCCC")
    }
  }

  return (
    <div className='w-full flex-col mt-20 items-center justify-center flex '>
      {open ? (
        <div className=' md:w-1/4 flex flex-col items-center gap-5 p-10 justify-center bg-white shadow shadow-gray-600'>
          <h1 className='text-2xs font-bold'>Đăng nhập Tài khoản</h1>
          <div className='flex flex-col gap-5'>
            <form onSubmit={handlelogin} >
            <label className='flex flex-col'>
              <span>Tài khoản</span>
              <input
               type='email'
                onClick={() => setBold(true)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2 outline-none border-1 ${bold ? 'border-red-500' : 'border-gray-400'}`}
              />
              <p className='text-xs'>Vui lòng nhập email của bạn</p>
            </label>
            <label className='flex flex-col'>
              <span>Mật khẩu</span>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => setBold(true)}
                className={`w-full p-2 outline-none border-1 ${bold ? 'border-red-500' : 'border-gray-400'}`}
              />
              <div className='flex-row w-full flex justify-between mt-5'>
                <div className='flex items-center justify-center '>
                  <input type='checkbox' />
                  <span className='text-xs'>Nhớ tôi</span>
                </div>
                <h1 className='text-xs'>Quên mật khẩu của bạn?</h1>
              </div>
            </label>
            <button type='submit' className='bg-red-500 p-2 w-full text-white'>Đăng Nhập</button>
              
            <h1 className='flex flex-row'>
              Bạn chưa có tài khoản ASUS?
              <span onClick={() => setOpen(false)} className='text-red-500 cursor-pointer ml-1'>Đăng ký ngay</span>
            </h1>
            </form>
          </div>
        
          <div className='flex flex-row w-full justify-center gap-5 items-center mt-5'>
            <div className='w-1/4 bg-gray-300 h-0.5'></div>
            <h1 className='text-xs'>Hoặc đăng nhập với</h1>
            <div className='w-1/4 bg-gray-300 h-0.5'></div>
          </div>
           
          <ul className='flex items-center justify-center gap-10'>
            <li><i className="fa-brands fa-facebook fa-2xl"></i></li>
            <li><i className="fa-brands fa-google fa-2xl"></i></li>
            <li><i className="fa-brands fa-apple fa-2xl"></i></li>
            <li><i className="fa-brands fa-microsoft fa-2xl"></i></li>
          </ul>
           
        </div>
      ) : (
        <div className='flex flex-col w-full md:w-1/2 justify-center p-10 gap-5 items-center'>
          <div className='w-full text-center'>
            <h1 className='text-3xl font-bold'>Sign Up Now</h1>
            <p>
              Please note that ASUS account is same as ROG account. If you have either account, you can{' '}
              <span onClick={() => setOpen(true)} className='text-red-400 cursor-pointer'>log in</span> directly without registering a new one.
            </p>
          </div>
          <div className='mt-20 flex flex-col gap-5'>
            <p className='text-center text-xs'>
              *Reminder: Choosing the ‘Hide my email’ option when using an Apple ID or Facebook account may result in missed notifications.
            </p>
            <ul className='w-full flex flex-col md:flex-row gap-4 text-red-400'>
              <li className="border-1 border-red-500 flex gap-2 p-5 items-center justify-center">
                Sign Up With <i className="fa-brands fa-facebook fa-2xl"></i>
              </li>
              <li className="border-1 border-red-500 flex gap-2 p-5 items-center justify-center">
                Sign Up With <i className="fa-brands fa-google fa-2xl"></i>
              </li>
              <li className="border-1 border-red-500 flex gap-2 p-5 items-center justify-center">
                Sign Up With <i className="fa-brands fa-apple fa-2xl"></i>
              </li>
              <li className="border-1 border-red-500 flex gap-2 p-5 items-center justify-center">
                Sign Up With <i className="fa-brands fa-microsoft fa-2xl"></i>
              </li>
            </ul>
            <div className='flex flex-row gap-5 items-center justify-center'>
              <div className='w-1/3 bg-gray-500 h-0.5'></div>
              <h1>Or Sign In With</h1>
              <div className='w-1/3 bg-gray-500 h-0.5'></div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <label>
                <span>Name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' className='w-full p-5 border border-gray-500' />
              </label>
              <label>
                <span>Account</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='w-full p-5 border border-gray-500' />
              </label>
              <label>
                <span>Password</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='w-full p-5 border border-gray-500' />
              </label>
              <label>
                <span>Re-enter Password</span>
                <input value={rePassword} onChange={(e) => setRePassword(e.target.value)} type='password' className='w-full p-5 border border-gray-500' />
              </label>
              <div className='w-full flex items-center justify-center'>
                <button type="submit" className='bg-red-500 w-1/2 p-2 text-white mt-20 mb-10'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logins;

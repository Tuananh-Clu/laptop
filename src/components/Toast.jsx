import React from 'react'

const Toast = () => {
  return (
    <div className="fixed top-15 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50">
      <h1 className="font-semibold">✅ Đã thêm vào giỏ hàng</h1>
    </div>
  );
};

export default Toast;

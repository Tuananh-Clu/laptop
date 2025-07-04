import React from 'react';
import img from '../assets/A8F46E54-87B3-494F-90CD-1452F4B430A4.jpg';
import logo from '../assets/asus-rog-1-logo.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 sm:px-10 md:px-20 py-10">
      {/* Top Section with Banner */}
      <div>
        <img src={img} alt="ASUS promotional" className="w-full h-auto object-cover" />
        <p className="mt-8 text-sm leading-relaxed">
          ¹The Windows 11 upgrade will be delivered to qualifying devices late 2021 into 2022. Timing varies by device.
          Certain features require specific hardware (see aka.ms/windows11-spec).<br />
          Due to surface-mounted components near the motherboard's M.2 slot, only single-sided SSDs are supported.<br />
          The availability of the 6GHz Wi-Fi band may vary depending on the country and its specific regulations.
          This feature is only supported when used with the specific wireless card provided at shipment, and requires
          Windows 11 or later.
        </p>
      </div>

      {/* Middle Section */}
      <div className="mt-16 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="ASUS ROG Logo" className="w-10 h-auto" />
            <h2 className="text-lg font-semibold">GAMING LAPTOP</h2>
          </div>

          <ul className="flex flex-wrap gap-4 text-sm">
            <li><a href="#">ABOUT ROG</a></li>
            <li><a href="#">HOME</a></li>
            <li><a href="#">NEWSROOM</a></li>
            <li><a href="#">ACCESSIBILITY HELP</a></li>
          </ul>

          <nav aria-label="social media">
            <ul className="flex gap-4 mt-2 text-xl">
              <li><i className="fa-brands fa-facebook" aria-hidden="true" title="Facebook"></i></li>
              <li><i className="fa-brands fa-square-x-twitter" aria-hidden="true" title="Twitter / X"></i></li>
              <li><i className="fa-brands fa-twitch" aria-hidden="true" title="Twitch"></i></li>
              <li><i className="fa-brands fa-instagram" aria-hidden="true" title="Instagram"></i></li>
              <li><i className="fa-brands fa-discord" aria-hidden="true" title="Discord"></i></li>
              <li><i className="fa-brands fa-youtube" aria-hidden="true" title="YouTube"></i></li>
              <li><i className="fa-brands fa-tiktok" aria-hidden="true" title="TikTok"></i></li>
              <li><i className="fa-brands fa-threads" aria-hidden="true" title="Threads"></i></li>
            </ul>
          </nav>
        </div>

        {/* Right - Email Signup */}
        <div className="w-full md:max-w-sm">
          <h3 className="text-lg font-semibold mb-2">GET THE LATEST UPDATES AND MORE</h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded border border-gray-300 text-black"
              required
            />
            <button type="submit" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
              SIGN UP
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-gray-700 w-full h-px my-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div>
          <i className="fa-solid fa-globe mr-1" aria-hidden="true"></i>
          Global / English
        </div>
        <ul className="flex flex-wrap gap-4 text-gray-400">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Cookie Settings</a></li>
          <li>© ASUSTeK Computer Inc. All rights reserved.</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

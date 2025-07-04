import React, { useState } from 'react';
import video from '../assets/1739200943275.mp4';
import YouTube from 'react-youtube';

const CESHighlight = () => {
  const [Video, SetVideo] = useState(false);
  const [List, setList] = useState(false);
  const [current,setCurrent]=useState(null);

  const videomodal=({videoid,onclose})=>(
        <div className="fixed top-0 left-0 z-50 w-full h-screen bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video p-4">
            <i
              onClick={onclose}
              className="fa-solid fa-xmark fa-2xl text-white absolute top-4 right-4 cursor-pointer hover:text-red-500 transition"
            ></i>
            <YouTube
              videoId={`${videoid}`}
              opts={{
                width: '100%',
                height: '100%',
                playerVars: { autoplay: 1 },
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      )
  // Danh sách video mẫu
  const highlights = [
    {
      thumbnail: 'https://dlcdnwebimgs.asus.com/gain/3556ADAF-FFE0-438E-899D-86B24B520C36',
      title: '2025 ROG Flow Z13 (GZ302)',
      subtitle: 'Compact is the new impact',
      id:"eJxkrdcg-5A"
    },
    {
      thumbnail: 'https://dlcdnwebimgs.asus.com/gain/DE30E4C6-6557-42CE-BA04-D59D3E2FA169',
      title: '2025 ROG Strix SCAR 16/18',
      subtitle: 'Victory, Accelerated',
       id:"h0uzaqyIFkg"
    },
    {
      thumbnail: 'https://dlcdnwebimgs.asus.com/gain/DCDCDDE0-9B44-4160-AB6A-5E5322C9C4D5',
      title: '2025 ROG Zephyrus G14',
      subtitle: 'Performance Meets Precision',
       id:"DMPWKA8qwG8"
    },
    {
      thumbnail: 'https://dlcdnwebimgs.asus.com/gain/30B9220D-7EBB-46CA-8DF8-5869998A5553',
      title: '2025 ROG STRIX G16/18 (GZ302)',
      subtitle: 'Compact is the new impact',
       id:"uJpoNd48Ha4"
    },
    {
      thumbnail: 'https://dlcdnwebimgs.asus.com/gain/DE30E4C6-6557-42CE-BA04-D59D3E2FA169',
      title: '2025 ROG Strix SCAR 16/18',
      subtitle: 'Victory, Accelerated',
       id:"MyMaNc-555Y8"
    },
    {
      thumbnail: 'https://dlcdnwebimgs.asus.com/gain/AA35FF71-2C2D-4445-A135-0577AFAFADAB',
      title: '2025 ROG Zephyrus G16',
      subtitle: 'Performance Meets Precision',
       id:"DMPWKA8qwG8"
    },

  ];

  return (
    <>
      {/* Nền video chính */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Nội dung chính */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center">
          <h1 className="w-2/3 md:w-1/3 text-5xl font-bold">
            CES 2025 - Laptops Highlights
          </h1>
          <button
            onClick={() => SetVideo(prev=>!prev)}
            className="bg-white text-black px-6 py-3 font-semibold mt-6 hover:bg-red-500 hover:text-white transition"
          >
            WATCH VIDEO
          </button>
        </div>

        {/* Panel bên phải: nút và danh sách */}
        <div className="absolute top-0 right-0 z-20 h-full flex items-center">
          {/* Nút toggle */}
          <button
            onClick={() => setList(!List)}
            className="text-white text-2xl bg-black/50 hover:bg-red-600 transition px-4 py-2 z-30"
          >
            <i className={`fa-solid ${List ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
          </button>

          {/* Danh sách panel */}
          {List && (
            <div className="bg-black/80  text-white w-80 h-full p-4 overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Highlight Videos</h2>
              {highlights.map((item, index) => (
                <div key={index} className="mb-6 group relative p-4 border border-white/10  transition duration-300">
                    <i onClick={()=>{setCurrent(item.id)}} class="fa-solid fa-play absolute top-20 fa-2xl right-1/2  translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 "></i>
                    <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  <img src={item.thumbnail} alt={item.title} className="w-full object-cover mb-2">

                  </img>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.subtitle}</p>                 
                </div>
              ))}
            </div>
          )}
          {current? videomodal({videoid:`${current}`,onclose:()=>{setCurrent(null)}}):""}
        </div>
      </div>

      {/* Modal video YouTube */}
      {Video? videomodal({videoid:"vhSDHuVaxfg",onclose:()=>{SetVideo(false)}}):""}
    </>
  );
};

export default CESHighlight;

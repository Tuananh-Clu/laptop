import React, { useContext, useLayoutEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import { LapModel } from './LapModel';
import { ViewProduct } from '../ViewSelectionProduct';
import {useNavigate} from 'react-router-dom'
const CameraSetup = () => {
  const { camera } = useThree();

  useLayoutEffect(() => {
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);
                return null;
};

const Model = () => {
  const {filters,setFilters} =useContext(ViewProduct);
    const navigate=useNavigate();
const handleClick = () => {
  setFilters({
    series: "ROG Strix SCAR",
    cpu: "",
    gpu: "",
    display: "",
    battery: "",
    connectivity: "",
    storage: "",
  });
  navigate('/AllModels'); 
};
  return (
    <div className="flex flex-row h-screen relative z-0 animate-fade-up animate-once animate-ease-out justify-center items-center w-full bg-gradient-to-tr from-black via-red-800 to-black">
      
      <div className="h-auto md:h-80 p-6 md:p-10 bg-black/50 w-full transform skew-y-5 shadow-2xl text-white flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 animate-fade animate-duration-[3000ms]">
        
        {/* Title */}
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold">ROG STRIX SCAR 16/18</h1>
          <h2 className="text-base md:text-xl font-medium">VICTORY, ACCELERATED</h2>
        </div>

        {/* 3D Model */}
        <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <Canvas shadows className="w-full h-full">
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
            <CameraSetup />
            <OrbitControls target={[-5, 0, -20]} enableDamping />
            <Center position={[-5, 5, -20]}>
              <LapModel scale={7} rotation={[Math.PI / 6, Math.PI / 4, 0]} />
            </Center>
          </Canvas>
        </div>

        {/* Description */}
        <div className="text-center md:text-right space-y-2 text-sm md:text-lg">
          <h3 className="md:text-2xl font-medium">Công nghệ đỉnh cao – Trải nghiệm không giới hạn.</h3>
          <p>ROG Strix SCAR – Thống trị mọi trận đấu.</p>
          <button onClick={()=>{handleClick()}} className="bg-black px-4 py-2 border border-red-400 hover:bg-red-600 transition duration-300 rounded">
            Khám Phá Ngay
          </button>
        </div>

      </div>
    </div>
  );
};
export default Model;

"use client";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import Car from "../../../public/Scene.jsx";
import { Suspense, useRef, useEffect, useState } from "react";
import React from "react";
import { Environment } from "@react-three/drei";
import { useScroll } from "@react-three/drei";
import Car1_details from "../car1_details/Car1_details.jsx";

const Car1 = () => {
  
  const divRef = React.useRef();
  function MyRotatingBox() {
    const myMesh = React.useRef(null);

    const data = useScroll();
    useFrame(() => {
      (myMesh.current.rotation.y = -1*(data.scroll.current * Math.PI * 2));
    })
    
    return (
      <mesh ref={myMesh}>
        <Car position={[0, 0.23, 0]} />
      </mesh>
    );
  }
  function Cube(){
    const myref = useRef();
    const data = useScroll();
    useFrame(() =>{
      myref.current.rotation.x = -1 * (data.scroll.current * Math.PI);
      myref.current.x = data.scroll.current * Math.PI;
    })

    return(
      <mesh rotateY={2} position={[-3,2,0]} ref={myref}>
        <boxGeometry />
        <meshBasicMaterial/>
      </mesh>
    )
  }
  function Cylinder() {
    const myref = useRef();
    const data = useScroll();
    useFrame(() => {
      (myref.current.rotation.y = (data.scroll.current * Math.PI * 2));
    })
    
    return (
      <mesh ref={myref}>
        <cylinderGeometry attach="geometry" args={[3, 3, 0.5]} sh />
        <meshPhongMaterial attach="material" color="darkRed" />
      </mesh>
    ); 
  }
  const scroll = useScroll();

  return (
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [-5, 3, 6] }}>
        <ScrollControls pages={3}>
        
            <Suspense fallback={null}>
              <Cube><Car1_details/></Cube>
              <MyRotatingBox />
            </Suspense>
            <Cylinder />
        </ScrollControls>
        <Environment files="./photos/background5.hdr" background />
        <pointLight position={[-5, 5, 8]} intensity={15} color="#FFFFFF" />
        <directionalLight
          position={[2, 5, -8]}
          intensity={15}
          color="#FFFFFF"
        />
        <ambientLight intensity={5} />
      </Canvas>
    </div>
  );
};

export default Car1;

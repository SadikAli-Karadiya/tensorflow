// 1) setup webcan and canvas
// 2) Definee references to those
// 3) Load facemesh
// 4) Detect function 
// 5) Drawing utilities
// 6) Load triangulation
// 7) Setup triangle Path 
// 8) Setup point drawing 
// 9) Add drawMesh to detect funtionimport React from 'react'

import React, {useRef} from 'react';
// import * as tf from '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/facemesh';
import Webcam from 'react-webcam';
import drawMesh from './FaceUtilities';
import './App.css'

function FaceDetect() {
     //setup refrences
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  //loading facemesh model
  const runFaceMesh = async () =>{
      const net = await facemesh.load({
        inputResolution: {
          width:640, 
          height:480
        }, 
        scale: 0.8
      })

      setInterval(()=>{ detect(net) }, 100);

  }

  //detect function
  const detect = async (net) =>{
    if(
      typeof webcamRef.current !== 'undefined' && 
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    )
    {
      //Get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //Set video width
      // webcamRef.current.video.width = videoWidth;
      // webcamRef.current.video.height = videoHeight;

      //set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      //Make detections. Sending video to model for predictions
      const face = await net.estimateFaces(video);

      //Get convas context from drawing
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx);
    }
  }
  runFaceMesh();
  return ( 
    <div className='face_container' >
      <Webcam ref={webcamRef} style={{  
          position: 'relative',
          zIndex: 9,
          width: 640,
          height: 480,
          
        }}
      />

      <canvas ref={canvasRef} style={{
          position: 'absolute',
          zIndex: 9,
          width: 640,
          height: 480,
        }} 
      />
    </div>
  )
}

export default FaceDetect;

import React, {useRef} from 'react'
import './App.css';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';

function HandDetect() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const loadHandpose = () =>{
        const net = handpose.load({
            inputResolution: {
                width:640, 
                height:480
              }, 
              scale: 0.8
        })

        setInterval(()=>{detectHand(net)}, 100);
    }

    const detectHand = (net) =>{
        if(
            typeof webcamRef.current !== 'undefined' && 
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
          )
          {
              const video = webcamRef.current.video;
              const videoHeight = webcamRef.current.video.videoHeight;
              const videoWidth = webcamRef.current.video.videoWidth;

              canvasRef.current.width = videoWidth;
              canvasRef.current.height = videoHeight;

              const hand = net.estimateHandpose(video)
              console.log(hand)

          }
    }

    loadHandpose();

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

export default HandDetect

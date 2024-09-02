// import React,{useEffect, useState} from 'react'

// function Count() {

//     const [Count, setCount] = useState(1)

//     function inc(){
//       if(Count === 5){
//         setCount(0)
//       }
//       else {
//         setCount(Count + 1)
//       }
//     }
    
//       function dec(){
//         if(Count === 0){
//           setCount(5)
//         }
//         else {
//           setCount(Count -1)
//         }
//       }


  
//         setInterval(() => {
//           inc()
//         },2000)

  
   


//   return (
//     <>
    
//     <h1>{Count}</h1>
//     <button onClick={dec}>Discriment</button>
//     <button onClick={inc}>increment</button>
    
//     </>
//   )
// }

// export default Count


// import React, {useState} from "react";

// import './Count.css'

// const ImageSwitcher = () =>{

//   const images =[

//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdETB5gLWqCQ8bx5T6TujTj2cHhUrsfJEKWw&s',

//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJDx2rgz5O2J26_fzWpRxRIHyKbg_uOfsUQ&s',


//     'https://www.shutterstock.com/image-photo/womans-hand-fern-leaf-man-260nw-2190358695.jpg',


//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPEK6dYPA91PjpBkelCTcyNjk-3jGCMZsOyQ&s'
    
//   ];

//   const [Count,setCount] = useState(0);

//   const handleClick = () => {

//     setCount((prevCount) => (prevCount + 1) % images.length);
//   }

//   return(
//     <div className="count">
//       <img
//       src={images[Count]}
//       alt={{width:'300px', height: '300px'}}
//       />
//       <button onClick={handleClick}>Next Image</button>

//     </div>
//   );
// };

// export default ImageSwitcher;


import React, {useEffect} from "react";
import { useState } from "react";
// import {FcNext} from "react-icon/fc";
// import {FcPrevious} from "react-icon/fc";
import "./Count.css";


function Count(){
  const [number,setNumber] = useState(1);

  const images = [
    {
      id: 1,
      src: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/hdr-software/HDR-photography_fb-img_1200x800.jpg"
    },

    {
      id: 2,
      src: "https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?cs=srgb&dl=pexels-pixabay-220769.jpg&fm=jpg"
    },

    {
      id: 3,
      src: "https://blog.polyhaven.com/wp-content/uploads/2019/02/venice_sunset.jpg"
    },

    {
      id: 4,
      src: "https://www.textures.com/system/gallery/photos/HDR%20Environments/ps145711/145711_thumbnail_small.jpg"
    },

    {
      id: 5,
      src: "https://c4.wallpaperflare.com/wallpaper/785/827/785/5bd1f64fc0410-wallpaper-preview.jpg"
    },

  ];


  const handleNext = () => {
    if (number === images.length - 1) {
      setNumber(0);
    }
    else{
      setNumber(number + 1);
    }
  };


  // const handleprew = () => {
  //   if (number === 0) {
  //     setNumber(images.length - 1);
  //   }
  // };


  useEffect(() =>{
    let Interval = setInterval(() =>{
      handleNext();
    }, 2000);
  

  return () => clearInterval(Interval);

})


return (
  <div className="main-box">
    <div className="image-display">

      {""}
      <img src={images[number].src} />
    </div>

    {/* <button onClick={handleprew} className="next-btn">
      <FcPrevious/>
    </button> */}
    <br/>
  

  </div>
)

}

export default Count;
// import React from 'react'
// import './Card.css'
// import './App.css'
// import pic from '../src/assets/pic.jpeg'
// import pic3 from '../src/assets/pic3.jpeg'


// function Card({image, name, price}) {
//     return (
//         <>
//             <div className='main'>
//                 <div className='image'>
//                     <img src={image} alt="" />
//                 </div>
//                 <div className='content'>
//                     <h3>name : {name}</h3>
//                     <h3>price : {price}</h3>

//                 </div>
//             </div>

//         </>
//     )
// }

// export default Card






import React from "react";

import './Card.css'

function Card({ image, name, price }) {

    return(
        <>
        
        <div className="parent">

            <div className="main">
                <div className="image1">
                    <img src={image} alt="" />

                </div>
                <div className="content">
                    <h3>name : {name}</h3>
                    <h3>price : {price}</h3>
                    <button>buy now</button>

                </div>

            </div>

        </div>

        </>
    )
}

export default Card;
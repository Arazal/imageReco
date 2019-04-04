import React from 'react'

const Facerecognition = ({ imageUrl }) => {
    return (
       <div className='center ma'>
         <div className='absolute mt2 '>
             <img alt='pic' src={imageUrl} width='500px' height='auto'></img>
          </div>
       </div> 
    )
}


export default Facerecognition
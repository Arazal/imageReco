import React from 'react'
import './Navigation.css'
import Tilt from 'react-tilt'
import brain from './Logo.png'

const Navigation = ({ onRouteChange }) => {
    return (
        <nav className='Nav'>
         <div className='pa2'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                 <div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} alt='logo' src={brain}></img></div>
            </Tilt>
         </div> 
            <p onClick={() => onRouteChange('signin')} className='br1 f3 link dim blue underline pa3 pointer'>Sign out</p>
          
       
        </nav>
    )
}


export default Navigation
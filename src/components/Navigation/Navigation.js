import React from 'react'
import './Navigation.css'


const Navigation = ({ onRouteChange, isSignedIn }) => {
    
    if (isSignedIn) {
        return (
            <nav className='Nav'>
               <p onClick={() => onRouteChange('signout')} className='br1 f3 link dim blue underline pa3 pointer'>Sign out</p>
            </nav>
        )
    } else {
           return (
            <nav className='Nav'>
                <p onClick={() => onRouteChange('signin')} className='br1 f3 link dim blue underline pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('register')} className='br1 f3 link dim blue underline pa3 pointer'>Register</p>
            </nav>
            )
    }

}


export default Navigation
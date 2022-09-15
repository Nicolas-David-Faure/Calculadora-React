import React from "react";
import LogoFreeCodeCampp from '../imagenes/logo-freecodecamp.jpg';
import '../stylesheet/LogoFreeCodeCamp.css'

function LogoFreeCodeCamp () {
    return(
    <div className='freecodecamp-logo-contenedor'>
    <img src={LogoFreeCodeCampp}
      className='freecodecamp-logo'
      alt='Logo freeCodeCamp' />  
</div>
)}
export default LogoFreeCodeCamp;
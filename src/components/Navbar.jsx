import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationBottom = styled.nav`
    background: #FFFFFF;
    box-shadow: 0px -4px 38px rgba(0, 0, 0, 0.02);
    border-radius: 20px 20px 0px 0px;
    `
const Navbar = () => {
  return (
        <NavigationBottom className="fixed z-30 bottom-0 inset-x-0  text-secondary flex justify-between p-4 items-center">
            
            <Link to={'/home'} className="flex flex-col items-center text-active gap-2">
                <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169973/Liveedu/Svg_1_p1eqwk.svg" alt="home" />
            </Link>

            <Link to={'/topics'} className="flex flex-col items-center gap-2">                
                <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169973/Liveedu/Svg_2_gfcokh.svg" alt="Quizes" />
            </Link>

            <Link to={'/estadisticas'} className="flex flex-col items-center gap-2">                
                <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169973/Liveedu/Svg_3_fmit3n.svg" alt="Estadisticas" />
            </Link>

            <Link to={'/profile'} className="flex flex-col items-center gap-2">                
                <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169973/Liveedu/Svg_4_frxl5h.svg" alt="Profile" />
            </Link>
        </NavigationBottom>
  )
}

export default Navbar
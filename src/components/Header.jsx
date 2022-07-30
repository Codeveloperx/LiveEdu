import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { DivFlex, HeaderC } from '../styles/styles'


const Header = () => {
  const {usuarioLogeuado, money} = useAuth();
  const [curso] = useState(520)


  const DesbloquearCurso = () =>{
    if (money >= curso) {
      alert("Congratulations!! desbloqueaste u nuevo curso.")
    }
  }

  useEffect(()=>{
    DesbloquearCurso()
  },[])

  return (
    <>
    <HeaderC>
      <div className='leading-none'>
      <h1 style={{display:'none'}} className='font-bold text-lg'>Loading....</h1>
      <h1 className='font-bold text-lg'>Hi, {usuarioLogeuado.nombre}</h1>
        <span className='text-sm'>Let's start learning</span>
      </div>
      <DivFlex>
        <div className='flex items-center gap-1 text-sm'>
          <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169974/Liveedu/Coins_gl9plh.png" alt="Money" />
          <span>{money}</span>
        </div>
        <span><img src="https://res.cloudinary.com/academiageek/image/upload/v1658169975/Liveedu/Notification_1_w9naop.png" alt="" /></span>
      </DivFlex>
    </HeaderC>
    </>    
  )
}

export default Header
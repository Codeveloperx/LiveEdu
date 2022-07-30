import React from 'react'
import { Img, ImgContainer, LogoContainer } from '../styles/styles'
import {Link} from 'react-router-dom'

const StepOne = () => {
  return (
    <LogoContainer>
        <ImgContainer className='mt-[8rem]'>
          <Img
            src="https://res.cloudinary.com/academiageek/image/upload/v1658169975/Liveedu/Svg_1_ivyvpa.png"
            alt=""
          />
        </ImgContainer>
        <div className="self-start ml-5">
          <h1 className='font-bold text-xl'>Explore new courses</h1>
          <p className='text-xs mt-2'>Study and watch all bur new courses <br /> and there are many of them</p>
          
          <article className='flex gap-2 mt-5'>
            <div className='w-[1.5rem] h-[0.5rem] bg-blue-300 rounded-lg'></div>
            <div className='w-[0.5rem] h-[0.5rem] bg-blue-300 rounded-lg'></div>
            <div className='w-[0.5rem] h-[0.5rem] bg-blue-300 rounded-lg'></div>
          </article>
        </div>
          <Link to='/step_2' className='w-[80%] flex mb-5 m-auto'>
            <button className='bg-blue-300 rounded-full w-[100%] p-2'>Next</button>
          </Link>
      </LogoContainer>
  )
}

export default StepOne
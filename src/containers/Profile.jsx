import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Profile = () => {

  return (
    <>
        <Header/>
        <div className='mt-10 w-[90%] m-auto'>
            <ul className='flex flex-col gap-5'>
                <li className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/profile_settings'}>
                        <span>
                            <img src='https://res.cloudinary.com/academiageek/image/upload/v1658169973/Liveedu/Svg_4_frxl5h.svg' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>Personal information</span>
                </li>

                <li className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/settings'}>
                        <span>
                            <img src='https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_9_bc8c3g.png' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>Transaction history</span>
                </li>

                <li className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/settings'}>
                        <span>
                            <img src='https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_10_x2m3ew.png' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>Payment</span>
                </li>

                <li className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/settings'}>
                        <span>
                            <img src='https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Terms_of_use_jg3xyc.png' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>Terms of use</span>
                </li>

                <li className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/settings'}>
                        <span>
                            <img src='https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_11_hbjsjc.png' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>Support</span>
                </li>
            </ul>
        </div>
        <Navbar/>
    </>
  )
}

export default Profile
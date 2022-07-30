import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const AccountSetting = () => {
  const navigate = useNavigate();
  const {logout} = useAuth()
  const {usuarioLogeuado} = useAuth()


  const handleLogout = () =>{
    logout()
    navigate('/login')
  }

  return (
    <>
      <div className='mt-4 flex justify-between items-center w-[55%] ml-3'>
        <button onClick={()=>(navigate('/profile'))}>
          <img src="https://res.cloudinary.com/academiageek/image/upload/v1659071139/Liveedu/Back_yua02l.png" alt="Back" width="15"/>
        </button>
        <span>Account Settings</span>
      </div> 
      <div className='mt-10 w-[90%] m-auto'>
            <ul className='flex flex-col gap-5'>
                <li className='flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/settings'}>
                        <span>
                            <img src='https://res.cloudinary.com/academiageek/image/upload/v1658169973/Liveedu/Svg_4_frxl5h.svg' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>{usuarioLogeuado.nombre}</span>
                  </div>
                  <button>
                    <img src="https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_15_irawzm.png" alt="" width="15"/>
                  </button>
                </li>

                <li className='flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/settings'}>
                        <span>
                          <img src='https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_13_iqbed4.png' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>{usuarioLogeuado.email}</span>
                  </div>
                  <button>
                    <img src="https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_15_irawzm.png" alt="" width="15"/>
                  </button>
                </li>

                <li className='flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/settings'}>
                        <span>
                          <img src='https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_14_c2nfmk.png' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>{usuarioLogeuado.telefono}</span>
                  </div>
                  <button>
                    <img src="https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_15_irawzm.png" alt="" width="15"/>
                  </button>
                </li>

                <li className='flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <Link className='bg-blue-100 p-2 rounded-lg' to={'/settings'}>
                        <span>
                          <img src='https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/place_outline_56_i3m2nx.png' alt='' width="15"/>
                        </span>
                    </Link>
                    <span>United States of America</span>
                  </div>
                  <button>
                    <img src="https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_15_irawzm.png" alt="" width="15"/>
                  </button>
                </li>
            </ul>
        </div>
        <div className="pt-[10rem] flex justify-center">
          <button onClick={handleLogout}
            type="button"
            className="gap-2 flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <img src="https://res.cloudinary.com/academiageek/image/upload/v1659068784/Liveedu/Svg_12_dldwtd.png" alt="" width="15" />
            Logout
          </button>
        </div>
    </>
  )
}

export default AccountSetting
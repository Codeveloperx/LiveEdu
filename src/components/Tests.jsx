// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TOPICS } from '../helpers/endPoints';
// import axios from 'axios';
import {useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
// import { ButtonPregunta } from '../styles/styles';
import {Basics as preguntas} from './Prueba'

const Tests = () => {
  
  
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [monedasRecibidas, setMonedasRecibidas] = useState(0);
  const navigate = useNavigate();
  const {setMoney, money, setUsuarioLogueado} = useAuth()


  console.log("tienes" ,money, "monedas")

  const getTest = async() =>{
    const resp = await axios.get(TOPICS)
    const data = await resp.data
    // setPreguntas(data)
    return data;
  }

  useEffect(()=>{
    setTimeout(()=>{
      getTest()
    },5000)
  },[])

  const handleAnswerClick = (isCorrect, e) =>{
    // Add puntuacion
    if (isCorrect){
      setPuntuación(puntuación + 1)
      e.target.classList.add(isCorrect ? "correct" : "incorrect");
      console.log(e.target.classList)
    }
  }  
  const handleSave = () =>{
    setMoney(Number(puntuación * 20)+Number(money))
    console.log(money)

    setTimeout(()=>{
      navigate("/home")
    },2000)
    // navigate('/home');
  }

  if(isFinished){
    return(
      <>
        <div className='mt-4 flex justify-between items-center w-[55%] ml-3'>
          <button>
          <img src="https://res.cloudinary.com/academiageek/image/upload/v1659071139/Liveedu/Back_yua02l.png" alt="Back" width="15"/>
          </button>
          <span>Lesson 1</span>
        </div> 
        <article className='flex flex-col justify-center items-center text-center w-full h-screen gap-5'> 
            <div className="mt-20">
                <img src="https://res.cloudinary.com/academiageek/image/upload/v1659064231/Liveedu/Stars_flwas7.png" alt="Stars" />
            </div>
            <div className='felicitaciones text-[#4B4B4B]'>
                <div className='mb-5'>
                    <h1 className='font-bold text-2xl'>Congratulations</h1>
                    <span className='text-sm'>You have completed the test</span>
                </div>

                <span className='text-sm'>{puntuación} correct answers</span>
                <div className='flex justify-center items-center mt-5 gap-2 text-sm'>
                    <span>
                        <img src="https://res.cloudinary.com/academiageek/image/upload/v1658169974/Liveedu/Coins_gl9plh.png" alt="Money" width='20'/>
                    </span>
                    <span>{puntuación * 20}</span>
                </div>
            </div>
            <div className='w-[20rem] pt-[10rem]'>
              <button onClick={handleSave} className='bg-blue-300 rounded-lg w-[100%] p-1'>Save</button>
            </div>
        </article>
      </>
  )
}

// console.log(preguntas[preguntaActual].questions)
  return (
    <>
    <div className='flex, justify-center text-center' style={{display: !preguntas ? 'block': 'none'}}>Loading.......</div>
    {preguntas &&
    <div className="w-[95%] m-auto mt-3 text-[#4B4B4B]">
      <div className='flex justify-between items-center'>
        <button onClick={()=>(navigate(-1))}>
          Atras
        </button>
        <span>Lesson 1</span>
        <span>{preguntaActual + 1}/{preguntas.length}</span>
      </div>
      <div className="mt-5">
        <video className='rounded-lg' controls src={preguntas[preguntaActual].video}></video>
      </div>

      <div className="mt-2 text-base">
        <span>{preguntas[preguntaActual].question}</span>
      </div>

      <div className="mt-5 ml-5">
      <ul className='flex flex-col gap-5'>
        {preguntas[preguntaActual].opciones.map((respuestas, idx)=>(
            <li key={idx} className='flex gap-3 items-center'>
              <button onClick={(e) => handleAnswerClick(respuestas.isCorrect, e)} className='bg-blue-300 rounded-lg px-2 text-white text-center'>?</button>
              <span>{respuestas.textoRespuesta}</span>
            </li>
        ))}
      </ul>
      </div>

      <div className='w-[80%] flex mt-14 m-auto '>
        <button onClick={() => (preguntaActual === preguntas.length - 1) ? setIsFinished(true): setPreguntaActual(preguntaActual + 1)} className='bg-blue-300 rounded-full w-[100%] p-1'>
          {(preguntaActual === 3) ?'Finished':'Next'}
        </button>
      </div>
    </div>
}
    </>
  )
}
export default Tests
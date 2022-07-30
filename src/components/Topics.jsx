import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {TOPICS} from '../helpers/endPoints'
import { Link, useParams } from 'react-router-dom'
import { Article, DviTopics } from '../styles/styles'

const Topics = () => {
    // const {id_test} = useParams();
    const [datos, setDatos] = useState([])

    useEffect(() => {
        getTopics();
    }, [])
    

    const getTopics = async() =>{
        const resp = await axios.get(TOPICS)
        const data = await resp.data;
        return setDatos(data);
    }
  return (
    <DviTopics>
        <h1 className='font-semibold text-lg text-[#4B4B4B]'>Topics to study</h1>
        {datos.map((value, index) =>
            <Article key={index}>
                <Link to={`/test/${value.id}`}>            
                    <div className='flex gap-3'>
                        <div>
                            <img src={value.img} alt="" />
                        </div>
                        <div className='leading-[0]'>
                            <h4 className='text-lg'>{value.title}</h4>
                            <span className='text-[10px]'>{value.description}</span>
                        </div>
                    </div>                    
                </Link>
                <div><span className='text-xs text-slate-400'>30 min</span></div>
            </Article>   
        )}

        
    </DviTopics>
  )
}

export default Topics
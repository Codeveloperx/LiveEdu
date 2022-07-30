import { useState } from "react";

const useForm = (initialState = {}) => {

    const [data, setData] = useState(initialState)

    const handleChange = ({target})=> setData(
        {
            ...data, 
            [target.name]: target.value
        }
    )   

    // const handleUploadImg = (url)=> setData({
    //     ...data,
    //     imagen: url
    // })

    return{data, handleChange}; //handleChangeSelect, handleUploadImg
};

export default useForm;
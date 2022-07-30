import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import useForm from '../hooks/useForm'
import { USERS } from "../helpers/endPoints";
import { Container } from "../styles/styles";
import {useAuth} from '../context/AuthContext'

const Register = () => {
  
  const [error, setError] = useState();
  const {signUp} = useAuth();
  const navigate = useNavigate();

  const {data, handleChange} = useForm({
    nombre:'',
    email:'',
    password:'',
    telefono:'',
    monedas: 400
});
  

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setError("");
    try{
      await signUp(data.email, data.password)
      await axios.post(USERS, data)
      alert("Usuario creado")
      navigate('/login');
    } catch(err){
      setError(err.message)
      alert("Ups! Hubo un problema, recargue la pagina!")
    }
    
  }
  return (
    <Container>
      <h1 className="font-bold text-lg">Create new Account</h1>
      <p className="text-xs">
        Create a new account by filling in all the <br />
        fields or log in to an existing account
      </p>
      <form onSubmit={handleSubmit}>
      <div className="mb-6 mt-10">
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="bg-gray-50 border border-[#A0FB8A] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nombre"
            onChange={handleChange}
            value={data.nombre}
          />
        </div>

        <div className="mb-6">
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
            onChange={handleChange}
            value={data.email}
          />
        </div>
        <div className="mb-6">
          <input
            type="telefono"
            id="telefono"
            name="telefono"
            className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Phone"
            required=""
            onChange={handleChange}
            value={data.telefono}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="bg-gray-50 border border-blue-300 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            required=""
            onChange={handleChange}
            value={data.password}
          />
        </div>

        {/* Mensaje de error */}
        {error && 
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mt-2" role="alert">
          <span className="font-medium">Error! </span>{error}
        </div>}
      {/* Fin mensaje de error */}

        <div className="pt-[2rem]">
          <button
            type="submit"
            className="bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
          >
            Create
          </button>
          <span className="flex justify-center">
            I have account ?
            <Link to={"/login"} className="text-blue-300 ml-1">
              Sign In
            </Link>
          </span>
        </div>

        <div className="mt-5" id="recaptcha-container"></div>
      </form>
    </Container>
  );
};
export default Register;

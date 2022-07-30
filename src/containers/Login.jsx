import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {USERS} from '../helpers/endPoints'
import { Container } from "../styles/styles";
import { useAuth } from "../context/AuthContext";
import useForm from "../hooks/useForm"

const Login = () => {
  
  const {userJson, setUpRecaptcha, setUsuarioLoagueado} = useAuth()
  const navigate = useNavigate();

  const {data, handleChange} = useForm({
    nombre: '',
    email:'',
    password:'',
    telefono:'',
    monedas: 400
  });
  
  const [otp, setOtp] = useState("");
  const [error, setError] = useState();
  const [showLogin, setShowLogin] = useState(true);
  const [showPhoneLogin, setShowPhoneLogin] = useState(false);
  const [showVerify, setShowVerify] = useState(false)
  const [result, setResult] = useState()


  const handleSubmit = async (e) =>{
    e.preventDefault();
    const dato = userJson.find(element=> element.email === data.email && element.password === data.password)
    setUsuarioLoagueado({
      nombre: dato.nombre,
      email: dato.email,
      telefono: dato.telefono,
      monedas: dato.monedas
    })
    dato ? navigate('/home'):alert('Correo no registrado || Password Incorrecta!')
    // Para ingresar con FIrbase
    // setError("");
    // try {
    //   await logIn(data.email, data.password)
    //   navigate('/home')
    // } catch (err) {
    //   setError(err.message)
    // }
  }

  const getOtp = (e) =>{
    e.preventDefault();
    setError("");
    if (data.telefono === "" || data.telefono === undefined)
      return setError("Porfavor ingrese un numero valido!")
      setUpRecaptcha(data.telefono)
      .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setResult(confirmationResult);
          })
          .catch((err) => {
            setError(err.message)
          });
      setShowPhoneLogin(false)
      setShowVerify(true)
  }

  const verifyOtp = async (e) => {
      e.preventDefault();
      setError("");
      if (otp === "" || otp === null) return;
      try {
        await result.confirm(otp);
        await axios.post(USERS, data);
        navigate("/home");
      } catch (err) {
        setError(err.message)
      }
    };
    // try{
    //   const resp = await axios.get(USERS)
    //   const usuario = await resp.data;
    //   const validarUsuario =  usuario.find(element => element.email === data.email);
    //   (validarUsuario)?navigate('/home'):navigate('/register')
    // } catch(err){
    //   console.error(err);
    // }


  return (
    <Container>
      <h1 className="font-bold text-lg">Welcome back!</h1>
      <p className="text-xs">
        Sign in to an existing account.
        <br /> using your phone number
      </p>
      <div style={{ display: showLogin ? "block" : "none" }}>
        <div className="pt-[2rem] text-center">
          <button onClick={()=>{
            setShowPhoneLogin(true)
            setShowLogin(false)
          }}
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Sign in with Phone number
          </button>
        </div>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">Or</p>
        </div>
      </div>

      {/* Formulario para ingresar mediante correo y contraseña */}
      <div>
        <form onSubmit={handleSubmit} style={{ display: showLogin ? "block" : "none" }}>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-[#A0FB8A] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="User@gmail.com"
              required
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={data.password}
              onChange={handleChange}
            />
          </div>

         { error && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mt-2" role="alert">
            <span className="font-medium">Error! </span>{alert(error)}
          </div> }
          <div className="pt-[6rem]">
            <button
              type="submit"
              className="bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
            >
              Login
            </button>
            <span className="flex justify-center">
              D’ont have account ?
              <Link to={"/register"} className="text-blue-300 ml-1">
                Sign up
              </Link>
            </span>
          </div>
        </form>

      </div>

      {/* Formulario para ingresar mediante el telefono */}
      <form onSubmit={getOtp} style={{ display: showPhoneLogin ? "block" : "none" }}>
        <div className="mb-6 mt-[2rem]">
          <input
            type="telefono"
            name="telefono"
            id="tel"
            className="bg-gray-50 border border-[#A0FB8A] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your phone number"
            required=""
            value={data.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="pt-[10rem] flex justify-center gap-2">
          <button
            type="submit"
            className="bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
          >
            Sing in with Phone number
          </button>
          <Link to="/login">
              <button
              className="bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
              >
                Cancel
              </button>
          </Link>
        </div>
      </form>

      {/* Formulario para ingresar el codgo de verificacion */}
      <form onSubmit={verifyOtp} style={{ display: showVerify ? "block" : "none" }}>
        <div className="mb-6 mt-5">
          <label
            htmlFor="otp"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Phone number
          </label>
          <input
            type="text"
            name="otp"
            id="otp"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Verify code ....."
            required=""
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        {error && <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mt-2" role="alert">
            <span className="font-medium">Error! </span>{error}
          </div>}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Verify Otp
        </button>
      </form>
      <div className="mt-5" id="recaptcha-container"></div>
    </Container>
  );
};

export default Login;

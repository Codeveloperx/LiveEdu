import { createContext, useContext, useEffect, useState} from "react";
import axios from 'axios'
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        RecaptchaVerifier,
        signInWithPhoneNumber,
        onAuthStateChanged,
        signOut
    } from "firebase/auth";
import {auth} from '../firebase/firebasConfig'
import {USERS} from '../helpers/endPoints'


export const authContext = createContext();

export const useAuth = () =>{
    const context = useContext(authContext);
    if (!context) throw new Error('No se encontro el provider')
    return context;

}

const AuthProvider = ({children}) =>{

    // const [info, setInfo] = useState({})
    const [user, setUser] = useState(null)
    const [userJson, setUserJson] = useState();
    const [money, setMoney] = useState(400)
    
    const [usuarioLogeuado, setUsuarioLoagueado] = useState();

    // Funcion para registrar un usuario en firebase mediante email y password
    const signUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password);
    }
    const setUpRecaptcha = (number) =>{
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

    const logout = () => signOut(auth);

    const getDataJson = async () =>{
        const resp = await axios.get(USERS)
        const dataJson = await resp.data
        setUserJson(dataJson);
        return dataJson
    }

    useEffect(() =>{
        getDataJson()
    }, [])
    

    useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
    },[])

    return(
        <authContext.Provider value={{signUp, logIn, setUpRecaptcha, user, logout, money, setMoney, userJson,usuarioLogeuado, setUsuarioLoagueado}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;
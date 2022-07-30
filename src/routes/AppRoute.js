import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepOne from '../components/StepOne';
import StepTwo from '../components/stepTwo';
import StepThree from '../components/stepThree';
import Loading from '../containers/Loading';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import '../styles/main.css'
import Tests from '../components/Tests';
// import Prueba from '../components/Prueba';
import ProtectedRoute from '../components/ProtectedRoute';
import Profile from '../containers/Profile';
import AuthProvider from '../context/AuthContext';
import AccountSetting from '../components/AccountSetting';
import Quiz from '../containers/Quiz'



export default class AppRoute extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <AuthProvider>
          <Routes> 
            <Route path='/' element={<Loading/>}/>
            <Route path='/step_1' element={<StepOne/>}/>
            <Route path='/step_2' element={<StepTwo/>}/>
            <Route path='/step_3' element={<StepThree/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={
              <ProtectedRoute> <Home/> </ProtectedRoute>}/>
            <Route path='/topics' element={<Quiz/>}/>          
            <Route path='/test/:id_Test' element={<Tests/>}/>        
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/profile_settings' element={<AccountSetting/>}/>
            {/* <Route path='/prueba' element={<Prueba/>}/> */}
          </Routes>
        </AuthProvider>
      </Router>
    )
  }
}

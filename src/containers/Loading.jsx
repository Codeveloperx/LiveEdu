import LogoIntro from '../components/LogoIntro';
import React, { Component } from 'react';
import StepOne from '../components/StepOne';

export default class Loading extends Component {
  constructor(){
    super()
    this.state = {
      showLoading: false
    }
  }

  componentDidMount(){
    this.loader();
  }
  // funcion para cambiar el estado del componente
  loader = ()=>{
    setTimeout(()=>{
      this.setState({
        showLoading:true
      })
    }, 5000)
  }


  render() {
    return (
      
      this.state.showLoading
      ?<StepOne/>
      :<LogoIntro/>
    )
  }
}
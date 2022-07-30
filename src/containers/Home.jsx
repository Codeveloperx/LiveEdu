import React, { Component } from 'react'
import Courses from '../components/Courses'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Topics from '../components/Topics'

export default class Home extends Component {
  render() {
    return (
      <>
      <Header/>
      <Courses/>
      <Topics/>
      <Navbar/>
      </>
    )
  }
}

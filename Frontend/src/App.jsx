import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSingup from './pages/CaptainSingup'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/login' element= {<UserLogin/>}/>
        <Route path='/signup' element= {<UserSignup/>}/>
        <Route path='/captain-login' element= {<CaptainLogin/>}/>
        <Route path='/captain-signup' element= {<CaptainSingup/>}/>

      </Routes>
    </div>
  )
}

export default App
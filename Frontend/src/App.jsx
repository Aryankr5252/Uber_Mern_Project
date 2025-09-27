import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSingup from './pages/CaptainSingup'
import { UserDataContext } from './context/UserContext.jsx'
import Start from './pages/Start.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper.jsx'
import CaptainLogout from './pages/CaptainLogout.jsx'
import Riding from './pages/Riding.jsx'
import CaptainRiding from './pages/CaptainRiding.jsx'

const App = () => {

  const ans = useContext(UserDataContext);

  return (
    <div className=''>
      <Routes>
        <Route path='/' element= {<Start/>} />
        <Route path='/login' element= {<UserLogin/>}/>
        <Route path='/riding' element= {<Riding/>}/>
        <Route path='/captain-riding' element= {<CaptainRiding/>}/>
        <Route path='/signup' element= {<UserSignup/>}/>
        <Route path='/captain-login' element= {<CaptainLogin/>}/>
        <Route path='/captain-signup' element= {<CaptainSingup/>}/>
        <Route path='/home' element= {
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        } />
        <Route path='/users/logout' element= {
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>
        } />
        <Route path='/captain-home' element= {
          <CaptainProtectedWrapper>
            <CaptainHome/>
          </CaptainProtectedWrapper>
        } />
        <Route path='/captain-logout' element= {
          <CaptainProtectedWrapper>
            <CaptainLogout/>
          </CaptainProtectedWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App
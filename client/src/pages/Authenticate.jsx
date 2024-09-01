import React, { useState } from 'react'
import videoFile from '../images/video3.mp4'
import '../styles/authenticate.css'
import Login from '../components/Login'
import Register from '../components/Register'
import {useNavigate} from 'react-router-dom'

const Authenticate = () => {

  const [authType, setAuthType] = useState('login');

  const navigate = useNavigate();

  return (


    <div className="AuthenticatePage">

        <div className="auth-navbar">
          <h3 onClick={()=> navigate('/')} >TalentSphere</h3>
          <p onClick={()=> navigate('/')} >Home</p>
        </div>

        <div className='landing-hero'>
        <video autoPlay muted loop playsInline className="background-video">
                <source src={videoFile} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            

        {authType==='login' ?
        <>
            <Login setAuthType={setAuthType} />
        </>
        :
        <>
            <Register setAuthType={setAuthType} />
        </>
        }
</div>
    </div>
  )
}

export default Authenticate
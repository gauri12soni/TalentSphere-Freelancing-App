import React, { useEffect } from 'react'
import videoFile from '../images/video2.mp4'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'


const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">
        <video autoPlay muted loop playsInline className="background-video">
                <source src={videoFile} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
                 
            <div className='landing-nav'>
              <h3>TalentSphere</h3>
              <button onClick={()=> navigate('/authenticate')} >
              <PiStudent style={{ marginRight: '8px' }} /> Sign In</button>

            </div>

            <div className="landing-hero-text">

              <h1>Where Skills Meet Opportunity <FaHandHoldingWater style={{ marginLeft: '8px' }} /><br /> Discover TalentSphere</h1>
                <p>Explore a world of limitless opportunities with TalentSphere. Ignite your creativity, sharpen your skills, and fuel your passion as you embark on an unparalleled freelancing adventure. Our platform is a dynamic hub where innovation meets demand, seamlessly connecting talented freelancers with businesses that value excellence </p>
                <button onClick={()=> navigate('/authenticate')}>
                <MdHealthAndSafety style={{ marginRight: '8px' }} />Join Now</button>
            </div>

        </div>

    </div>
  )
}

export default Landing
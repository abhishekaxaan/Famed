import React from 'react'
// import { useState } from 'react'
import Nav from '../components/Nav'
// import AuthModal from '../components/AuthModal'

const Home = ({ authToken }) => {
      // const [showModal, setShowModal] = useState(false)
      // const [isSignUp, setIsSignUp] = useState(true)

      // const handleClick = () => {
      //       console.log('clicked')
      //       setShowModal(true)
      //       setIsSignUp(true)
      // }

      return (
            <div className="home">
                  <Nav
                        colorLogo={false}
                        authToken={authToken}
                        // setShowModal={setShowModal}
                        // setIsSignUp={setIsSignUp}
                  />
            </div>
      )
}

export default Home

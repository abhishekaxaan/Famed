import React from 'react'
import { useState } from 'react'
import Nav from '../components/Nav'
import AuthModal from '../components/AuthModal'

const Home = ({ authToken }) => {
      const [showModal, setShowModal] = useState(false)
      const [isSignUp, setIsSignUp] = useState(true)

      const handleClick = () => {
            console.log('clicked')
            setShowModal(true)
            setIsSignUp(true)
      }

      return (
            <div className="home">
                  <Nav
                        colorLogo={false}
                        authToken={authToken}
                        setShowModal={setShowModal}
                        setIsSignUp={setIsSignUp}
                  />
                  <div className="overlay">
                        <h1 className="tagline">Make Videos & Get Fame</h1>
                        <button
                              className="primaryBtn"
                              onClick={handleClick}
                              setShowModal={setShowModal}
                        >
                              CREATE ACCOUNT
                        </button>
                  </div>
                  <div className="authOverlay">
                        {showModal && (
                              <AuthModal
                                    setShowModal={setShowModal}
                                    isSignUp={isSignUp}
                                    setIsSignUp={setIsSignUp}
                              />
                        )}
                  </div>
            </div>
      )
}

export default Home

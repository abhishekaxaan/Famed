import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../images/famed-logo-white.png'
import LogoColored from '../images/famed-logo-colored.png'
// import { useState } from 'react'

const Nav = ({ colorLogo, setShowModal, setIsSignUp }) => {
      const authToken = false

      const handleClick = () => {
            console.log('clicked')
            setShowModal(true)
            setIsSignUp(false)
      }

      return (
            <nav>
                  <Link to="/">
                        <div className="logo-container">
                              <img
                                    className="logo"
                                    src={colorLogo ? LogoColored : LogoWhite}
                                    alt=""
                              />
                        </div>
                  </Link>
                  <button
                        className="navBtn"
                        onClick={handleClick}
                        setShowModal={setShowModal}
                        // disabled={true}
                  >
                        {!authToken ? 'LOG IN' : 'SIGN OUT'}
                  </button>
            </nav>
      )
}

export default Nav

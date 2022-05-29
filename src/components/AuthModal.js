import React from 'react'
import { useState } from 'react'

const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
      const [email, setEmail] = useState(null)
      const [password, setPassword] = useState(null)
      const [confirmPassword, setConfirmPassword] = useState(null)
      const [error, setError] = useState(null)

      console.log(email, password, confirmPassword)

      const handleClick = () => {
            console.log('clicked')
            setShowModal(false)
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            try {
                  if (isSignUp && password !== confirmPassword) {
                        setError('Passwords need to match.')
                  }
                  console.log('make a post request to our database')
            } catch (error) {
                  console.log(error)
            }
      }

      return (
            <div className="authModal">
                  <div
                        className="closeModalBtn"
                        onClick={handleClick}
                        setShowModal={setShowModal}
                  >
                        X
                  </div>
                  <div>
                        <h2 className="authTitle">
                              {isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}
                        </h2>
                  </div>
                  <form className="authForm" onSubmit={handleSubmit}>
                        <p>
                              By clicking Submit, you agree to our terms &
                              conditions.
                        </p>
                        <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="E-Mail"
                              required={true}
                              onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Password"
                              required={true}
                              onChange={(e) => setPassword(e.target.value)}
                        />

                        {isSignUp && (
                              <input
                                    type="password"
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    placeholder="Confirm Password"
                                    required={true}
                                    onChange={(e) =>
                                          setConfirmPassword(e.target.value)
                                    }
                              />
                        )}
                        <div className="authBtn">
                              <button className="authResetBtn" type="reset">
                                    RESET
                              </button>
                              <button className="authSubmitBtn" type="submit">
                                    SUBMIT
                              </button>
                        </div>
                        <p>{error}</p>
                  </form>
                  <hr />
                  <h2>GET THE APP</h2>
            </div>
      )
}

export default AuthModal

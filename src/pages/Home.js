import React from 'react'
// import { useState } from 'react'
import Nav from '../components/Nav'
import FollowersColumn from '../components/FollowersColumn'
import Feed from '../components/Feed'
import ChatContainer from '../components/ChatContainer'
// import FrontOverlay from '../components/FrontOverlay'
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
            <div>
                  <Nav
                        colorLogo={false}
                        authToken={authToken}
                        // setShowModal={setShowModal}
                        // setIsSignUp={setIsSignUp}
                  />
                  <div className="home">
                        <FollowersColumn />
                        <div className="feed">
                              <Feed />
                              <Feed />
                              <Feed />
                              <Feed />
                        </div>

                        <ChatContainer />
                  </div>
            </div>
      )
}

export default Home

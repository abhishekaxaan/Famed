import React from 'react'
import { useState, useRef } from 'react'
import DefaultDP from '../images/default-dp.jpeg'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'

const Feed = ({ username, caption, url, likes, comments, shares }) => {
      const [playing, setPlaying] = useState(false)
      const [liked, setLiked] = useState(false)
      const videoRef = useRef(null)

      const handleVideoPress = () => {
            console.log('video paused')
            if (playing) {
                  videoRef.current.pause()
                  setPlaying(false)
            } else {
                  videoRef.current.play()
                  setPlaying(true)
            }
      }

      return (
            <div className="feedDesign">
                  <div className="videoContainer">
                        <div className="videoHeader">
                              <img src={DefaultDP} className="dp" alt="" />
                              <h3 className="username">{username}</h3>
                        </div>
                        <p className="caption">{caption}</p>
                        <video
                              className="video"
                              onClick={handleVideoPress}
                              ref={videoRef}
                              loop
                              src={url}
                              autoPlay
                              controls
                        ></video>
                        <div>
                              <div className="footerIcons">
                                    {liked ? (
                                          <FavoriteBorderIcon
                                                className="counters"
                                                onClick={(e) => setLiked(false)}
                                          />
                                    ) : (
                                          <FavoriteBorderIcon
                                                className="counters"
                                                onClick={(e) => setLiked(true)}
                                          />
                                    )}
                                    <p>{liked ? likes + 1 : likes}</p>
                              </div>
                              <div className="footerIcons">
                                    <CommentIcon className="counters" />
                                    <p>{comments}</p>
                              </div>
                              <div className="footerIcons">
                                    <ShareIcon className="counters" />
                                    <p>{shares}</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Feed

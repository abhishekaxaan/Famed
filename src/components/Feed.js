import React from 'react'
import FeedDesign from './FeedDesign'

const Feed = () => {
      return (
            <FeedDesign
                  className="feed"
                  username="famed"
                  caption="This is a very simple example for a good caption #with #some #random #tags"
                  url="https://player.vimeo.com/external/544507823.sd.mp4?s=d28782e0a835ca3702fba7ed2b9d7ba68c9369b3&profile_id=165&oauth2_token_id=57447761"
                  likes={1233}
                  comments={567}
                  shares={89}
            />
      )
}

export default Feed

import React from 'react'
import { useState } from 'react'

const ChatInput = () => {
      const [textArea, setTextArea] = useState(null)

      return (
            <div className="chatInput">
                  <textArea
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                  />
                  <button className="sendBtn">Send</button>
            </div>
      )
}

export default ChatInput

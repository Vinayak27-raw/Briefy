import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/BriefyBox.css'


function BriefyBox() {
  return (
    <div className='briefyBox'>
        <div className='briefyBox_info'>
          <Avatar />
        </div>
        <div className='briefyBox_briefy'><h5>Ask your question here..</h5></div>
    
    </div>
  )
}

export default BriefyBox
import React from 'react'
import BriefyBox from './BriefyBox'
import './css/Feed.css'
import Post from './Post'


function Feed() {
  return (
    <div className='feed'>
     <BriefyBox/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     
     </div>
    )
}

export default Feed
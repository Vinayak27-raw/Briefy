import React from 'react'
import Briefynavbar from './Briefynavbar'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Widget from './Widget'
import './css/Briefy.css'

function Briefy() {
  return (
    <div className = 'briefy'>
      <Briefynavbar/>

      <div className = 'briefy_contents'>
             <div className = 'briefy_content'> 
                  <Sidebar/>
                  <Feed/>
                  <Widget/>
            </div>
    </div>



    </div>
  )
}

export default Briefy
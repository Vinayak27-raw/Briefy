import React from 'react'
import { Add } from "@material-ui/icons";
import "./css/SidebarOptions.css"

function SidebarOptions() {
  return (
    <div className='sidebarOptions'>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>DS</p>
        </div>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>CP</p>
        </div>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>GATE</p>
        </div>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>GRE</p>
        </div>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>CAT</p>
        </div>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>Placements</p>
        </div>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>Core CS</p>
        </div>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>Examination</p>
        </div>

        <div className='sidebarOption'>
            <img alt ='logo'/>
            <p>XYZ</p>
        </div>

        <div className='sidebarOption'>
            <Add/>
        
            <p className='text'>Discover Spaces</p>
        </div>

</div>

  );
}

export default SidebarOptions
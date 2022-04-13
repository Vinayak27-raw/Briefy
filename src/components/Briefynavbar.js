import { AssignmentTurnedInOutlined, FeaturedPlayListOutlined,
   Home, NotificationsOutlined,
   PeopleAltOutlined, SearchOutlined } from '@material-ui/icons';
   import { Avatar, Button } from '@mui/material';
   import "./css/Briefynavbar.css";
import React from 'react'


function Briefynavbar() {
  return (
    <div className = 'bHeader'>
       <div className = 'bHeader-content'>
         <div className = 'bHeader_logo'>
           <img src ='./images/logo.png' alt = 'logo' />
           </div>
           
            <div className ='bHeader_icons'>

               <div className ='bHeader_icon'>
                 <Home/></div>
               <div className ='bHeader_icon'>
                 <FeaturedPlayListOutlined/></div>
               <div className ='bHeader_icon'>
                 <AssignmentTurnedInOutlined/></div>
               <div className ='bHeader_icon'>
                 <PeopleAltOutlined/></div>
               <div className ='bHeader_icon'>
                 <NotificationsOutlined/></div>

             </div>
             

             
                  <div className ='bHeader_input'>
                    <SearchOutlined/>
                   
                    <input type ="text" 
                    placeholder = 'Search Questions'/>
                 
                  </div>
                  
                  <div className = 'bHeader_rem'>
                     <Avatar></Avatar>
                  </div>
                 
                  <Button>Add A Question</Button>
             

           

         </div>
     </div>
     
  )
}

export default Briefynavbar
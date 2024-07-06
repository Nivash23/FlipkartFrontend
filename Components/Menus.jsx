import React from 'react'

function Menus({menupage,setMenupage}) {
  return (
    <div id="menuscontainer" class={menupage}>
      <div id="menubox">

      <div class="row">
        <div>My Profile</div>
      </div>
      <hr></hr>
      <div class="row">
        <div>Settings</div>
      </div>
        <hr></hr>
      <div class="row">
        <div onClick={()=>{window.location.href="https://brands.flipkart.com/catapult-about"}}>About</div>
      </div>
        <hr></hr>
      
      <div class="row">
        <div>Rewards</div>
      </div>
        <hr></hr> 
      <div class="row">
        <div>Help</div>
      </div>
        <hr></hr> 
      
      </div>
    </div>
  )
}

export default Menus
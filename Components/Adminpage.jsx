import React, { useState } from 'react'

function Adminpage({adminbut,setAdminbut,entrypage,setEntrypage}) {
    const [acesscode, setAcesscode] = useState({
      code:""
    })
  
  const admincodehandler =async (e) => {
    e.preventDefault();

    const adminbody = {
      acesscode: acesscode.code
    }
    const response = await fetch('https://flipkartbackend-re50.onrender.com/api/Admin/', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(adminbody)
    })

    const data = await response.json();

    if (response.status == 200)
    {
      setAdminbut('Ainactive');
      setAcesscode({ code: "" });
      setEntrypage('Eactive')
      }


  } 

    return (
        <div id="adminbody" class={adminbut}>

      <div id="admincontainer">
            
        </div>

        <div id="adminbox">
          <div id="Axclose" onClick={()=>{setAdminbut('Ainactive')}}>X</div>
          <label>Admin code :</label>
        <form onSubmit={admincodehandler}>
          <div>
              
            <input type="password"  placeholder='Enter acess code...' required
               onChange={(e) => { setAcesscode({ code: e.target.value }) }}
              value={acesscode.code}
        
            />
          </div>
          <button type="submit" onClick={admincodehandler} >login</button>
        </form>
    </div>
        </div>
  )
}

export default Adminpage
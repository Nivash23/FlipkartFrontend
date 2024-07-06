import React from 'react'

function Cartlist({ cartlist, setCartlist,cartlistpage,setCartlistpage,totalprice,setTotalprice }) {
  return (
    <div id="cartcontainer" class={cartlistpage}>
      <div id="cartbox">
          {
        cartlist.map((product, i) => 
          <div class="row">
            <div class="col-5">
              <img id="cartlistimg" src={product.src} />
              <div id="cpname">{product.name} </div>
              <div >{product.Description} </div>
            </div>
            <div class="col-3">
              <div>Price :</div>
              <div>Rs.{product.price }</div>
            </div>          
            <hr></hr>
          </div>
               
          )}
        <div id="cartpriceandbuy">
          <div>Total Price :Rs.{totalprice}  </div>
          <button type="button" id="cartbuybut">Buy</button>

        </div>
      </div>
    </div>
  )
}

export default Cartlist
import React, { useEffect, useRef, useState } from "react";

import "../style/index.css";
import Slider from "../Components/Slider";
import Products from "../Components/Products";
import Admin from "../Components/Adminpage"
import ProductEntry from "../Components/ProductEntry";
import Cartlist from "../Components/Cartlist";
import Menus from "../Components/Menus";
import FooterMenu from "../Components/FooterMenu";

function App() {
  const [cartcount, setCartcount] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartlist, setCartlist] = useState([]);
  const [totalprice, setTotalprice] = useState(0);
  const [cartlistpage,setCartlistpage]=useState('Cinactive')
  const [adminbut, setAdminbut] = useState('Ainactive');
  const [entrypage, setEntrypage] = useState('Einactive');
  const [menupage,setMenupage]=useState('Minactive')


  
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderhandler =async () => {
    setTimeout(() => {
     
      setTimeout(() => {
        setSlideIndex(slideIndex+1)
      }, 2000)
   },4000)
    
  }

  useEffect(() => {
    sliderhandler();
  },[slideIndex])
 
  
  
  const [recategory1, setRecategory1] = useState({
    category1:""
  })
  
  const [searchcategory, setSearchcategory] = useState({
    category:""
  })
  const searchhandler = async(e) => {
    e.preventDefault();
    const search = {
      Category:searchcategory.category
    }
    
    const response = await fetch('https://flipkartbackend-re50.onrender.com/api/search/',
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(search)
      }
      
      
    )
    const data =await response.json();
    
    if (response.status == 200)
      {
        setSearchcategory({ category: "" });
        setProducts(data.listofproducts)
        
        
      }
    }
    
    const catehandler = async (e) => {
      // e.preventDefault();
      
      const catebody = {
        Category1:recategory1.category1
      }
      
      
      const response = await fetch('https://flipkartbackend-re50.onrender.com/api/category1/', {
        method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(catebody)
      
    })
    
    const data = await response.json();
    
    if (response.status == 200)
      {
        setProducts(data.productslist);
        // setRecategory1({ category1: "" })
        // console.log(catebody.Category1)
      }
    }
    useEffect(() => {
      catehandler();
    },[recategory1])
    return (
    <div id="body">
      <form onSubmit={searchhandler}>

      <div id="navigation" >
        <img src="../images/flipkartoriginal.png" id="logo" />

        <input
          type="text"
          id="searchbar"
          placeholder="Search for Products, Brand and More"
          value={searchcategory.category}
          onChange={(e)=>{setSearchcategory({...searchcategory,category:e.target.value})}}
        />
        <button type="submit" onClick={searchhandler} id="searchbut">
          <ion-icon name="search-outline"></ion-icon>
          </button>
          <div id="menus">

        <button  data-bs-toggle="dropdown" type="submit" id="loginbut">
          <span>
            <img
              id="userimg"
              width="18"
              height="18"
              src="https://img.icons8.com/windows/32/user-male-circle.png"
              alt="user-male-circle"
            />
          </span>
          login
            <span>
              
            <img
              width="15"
              height="15"
              id="dropimg"
              src="https://img.icons8.com/plumpy/24/expand-arrow.png"
              alt="expand-arrow"
            />
          </span>
        </button>


        <ul class="dropdown-menu">
           <li><a class="dropdown-item" href="#"><img src="https://img.icons8.com/windows/32/user-male-circle.png" id="profileimg"/>My profile</a></li>
           <li><a class="dropdown-item" href="#"><i class="fa fa-book" id="img1"></i>Orders</a></li>
           <li><a class="dropdown-item" href="#"><i class="fa fa-heart"></i>Wishlist</a></li>
           <li><a class="dropdown-item" href="#"><i class="fa fa-gift"></i>Rewards</a></li>
           <li><a class="dropdown-item" href="#"><i class="fa fa-ticket"></i>Gift Cards</a></li>
        </ul>

              <button type="submit" id="cartbut" onClick={() =>
              {
                if (cartlistpage == 'Cinactive')
                  {
                  setCartlistpage('Cactive');
                }
                else {
                  setCartlistpage('Cinactive')
                }
                
              }}>
          <span>
            <img
              width="16"
              height="20"
              src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png"
              alt="shopping-cart--v1"
            />
          </span>
              Cart<span id="cartcount">{cartcount }</span>
        </button>
        <button id="Bsell" type="button" onClick={()=>{setAdminbut('Aactive')}}>Become a Seller</button>
          </div>
          <div >
          
          <img id="menulines" width="25" height="30"
          src="https://img.icons8.com/sf-regular-filled/48/menu-2.png"
          alt="menu-2"
          onClick={() => {
                  if (menupage == "Minactive")
                  {
                    setMenupage('Mactive');

                  }
                  else {
                    setMenupage('Minactive')
                  }
          }}      
        />
          
          </div>
      </div>
      </form>
      <div id="innerbody">
        <div id="innerhead">
          <div id="g" onClick={() => {
            setRecategory1({ category1: 'Grocery' });
            
            
            
          
          }}>
            <img id="grocery" src="../images/grocery.webp" alt="grocery" />
            <p>Grocery</p>
          </div>
          <div onClick={() => {
            setRecategory1({ category1: 'electronics' });

          }}>
            <img src="../images/mobiles.avif" id="Mobiles" />
            <p>Mobiles</p>
          </div>
          <div onClick={() => {
            setRecategory1({ category1: 'Fasion' });
          }}>
            <img src="../images/fasion.webp" id="fasion" />
            <p>Fasions</p>
          </div>
          <div onClick={() => {
            setRecategory1({ category1: 'electronics' });
          }}>
            <img src="../images/electronics.webp" id="electronics" />
            <p>Electronics</p>
          </div>
          <div onClick={()=>{setRecategory1({category1:'Toys'})}}>
            <img src="../images/toys.jpeg" id="toys" />
            <p>Beauty,Toys and More</p>
          </div>
          <div onClick={()=>{setRecategory1({category1:'Vehicles'})}}>
            <img src="../images/twowheelers.jpg" id="bikes" />
            <p>Two wheelers</p>
          </div>
          <div
            onClick={() => {
              setRecategory1({category1:'Furnitures'})
            }}
          >
            <img src="../images/homeandfurnitures.webp" id="furnitures" />
            <p>Home and furnitures</p>
          </div>
        </div>
        <div id="slide">
          <Slider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        </div>
        <div>
           <Admin adminbut={adminbut} setAdminbut={setAdminbut} entrypage={entrypage} setEntrypage={setEntrypage}   />    
        </div>
        <div>
           <ProductEntry entrypage={entrypage} setEntrypage={setEntrypage} />
        </div>  
          <div id="cartlist">
            <Cartlist cartlist={cartlist} setCartlist={setCartlist} cartlistpage={cartlistpage} setCartlistpage={setCartlistpage} totalprice={totalprice} setTotalprice={setTotalprice} />
            <Menus menupage={menupage} setMenupage={setMenupage} />
          </div>
          <div>

            <FooterMenu   />
          </div>
        <div id="products">
            <Products products={products} setProducts={setProducts} setCartcount={setCartcount} cartcount={cartcount} cartlist={cartlist} setCartlist={setCartlist}
                 totalprice={totalprice} setTotalprice={setTotalprice}          
            />


          </div>
          
      </div>
    </div>
  );
}

export default App;
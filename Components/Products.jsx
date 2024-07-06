import React, { useEffect, useState } from "react";
import "../style/Card.css";

function Products({ products, setProducts, setCartcount, cartcount,cartlist,setCartlist,totalprice,setTotalprice }) {
  const handleProducts = async () => {
    const response = await fetch("https://flipkartbackend-re50.onrender.com/api/getProducts/");

    const data = await response.json();

    if (response.status == 200) {
      setProducts(data);
    }
  };
  useEffect(() => {
    handleProducts();
  }, []);
  
  return (
    <div>
      <div class="row">
        {products.map((item, i) => (
          <div class="col-md-3">
            <div id="cardcontainer">
              <div class="card text-center" id="card">
                <img id="image" src={item.src} alt="450x300" />
                <div class="card-body">
                  <h5 id="Name" class="card-title">
                    {" "}
                    {item.name}
                  </h5>
                  <p id="Price" class="card-text">
                    {item.Description}
                  </p>
                  <div>Rs.{item.price} </div>
                  <div id="btns">
                    <button type="button">Buy</button>
                    <button
                      type="button"
                      onClick={() => {
                        setCartcount(cartcount + 1);

                        setCartlist([...cartlist, item]);
                        setTotalprice(totalprice+item.price)

                        
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

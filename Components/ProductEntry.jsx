import React, { useState } from "react";

function ProductEntry({entrypage,setEntrypage}) {
  const [productDetails, setProductDetails] = useState({
    ProductName: "",
    Price: "",
    Category: "",
    ProductCategory: "",
    Description: "",
    Src: "",
  });

  const entryhandler = async (a) => {
    a.preventDefault();

    const entrybody = {
      name: productDetails.ProductName,
      price: productDetails.Price,
      category: productDetails.Category,
      ProductCategory: productDetails.ProductCategory,
      Description: productDetails.Description,
      src:productDetails.Src
    }

    const response = await fetch('https://flipkartbackend-re50.onrender.com/api/Admin/productentry/', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(entrybody)
    })

    if (response.status == 200)
    {
      setProductDetails({
        ProductName: "",
        Price: "",
        Category: "",
        ProductCategory: "",
        Description: "",
        Src:""
      })
      }
  }



  return (
    <div id="entrybody" class={entrypage}>
      <div id="entrycontainer"></div>
      <div id="entrybox">
        <div id="Exclose" onClick={()=>{setEntrypage('Einactive')}}>X</div>
        <h4>Product Entry </h4>      
        <form onSubmit={entryhandler}>    
          <div>
            <label>Product Name :</label>
            <input type="text" placeholder="Product Name..."
              onChange={(e) => {setProductDetails({...productDetails,ProductName: e.target.value,})}}
              value={productDetails.ProductName}
              required
            />
            </div>
            <div>
                <label>Price :</label>
                <input type="number" placeholder="Enter the Price..."
                  onChange={(e) => { setProductDetails({ ...productDetails, Price: e.target.value }) }}
                  value={productDetails.Price}        
                />      
            </div>
            <div>
                <label>Category :</label>
                <input type="text" placeholder="Enter the category..."
                  onChange={(e) => { setProductDetails({ ...productDetails, Category: e.target.value }) }}
                  value={productDetails.Category}        
                />      
            </div>
            <div>
                <label>Product Category :</label>
                <input type="text" placeholder="Enter the product category..."
                  onChange={(e) => { setProductDetails({ ...productDetails, ProductCategory: e.target.value }) }}
                  value={productDetails.ProductCategory}        
                />      
            </div>
            <div>
                <label>Description :</label>
                <input type="text" placeholder="Enter the product Description..."
                  onChange={(e) => { setProductDetails({ ...productDetails, Description: e.target.value }) }}
                  value={productDetails.Description}        
                />      
            </div>
            <div>
                <label>ImageURL :</label>
                <input type="text" placeholder="Image URL..."
                  onChange={(e) => { setProductDetails({ ...productDetails, Src: e.target.value }) }}
                  value={productDetails.Src}        
                />      
            </div>
            <button type="submit" onClick={entryhandler}>Push</button>      
        </form>
      </div>
    </div>
  );
}

export default ProductEntry;

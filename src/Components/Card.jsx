import { useState } from "react";


export function Card(){
    const users=[
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/Untitled-9.jpeg",
          },
          {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "image": "https://www.neolight.in/wp-content/uploads/2022/01/iphone-x-silver.png"
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "image": "https://imageio.forbes.com/blogs-images/gordonkelly/files/2018/08/Screenshot-2018-08-10-at-03.58.50.png?height=474&width=711&fit=bounds"
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "image": "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/beta-f19/navigation/F19-navigation-blue-v2.png"
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "image": "https://images-cdn.ubuy.co.in/633ff647ed8e2e306c7cdcdd-huawei-p30-pro-128gb-8gb-ram-vog-l29.jpg"
        }
    ]

    function handleInc(){
        setCount(count + 1);
    }
    function handleDec(){
        setCount(count - 1)
    }
    
     const [state,setState] = useState(users);
     const [count,setCount] = useState(1);

  
   return (
    <div className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">

    <div className="container ">
        <div className="row">

            {
                state.map((val,idx)=>{
                    const discountedPrice = Math.round(val.price/100 * val.discountPercentage);
                    const FinalPrice = val.price - discountedPrice;
                    
                    return (
                        <>

            <div key={idx} className="col-md-12 mb-5">
            <div className="card border border-dark mb-5">
            <div  className="row m-3">
            <div className="col-md-3">
            <img src={val.image} className="img-fluid rounded-start cardImage"alt="" />
            </div>
            <div className="col-md-9">
            <div className="card-body px-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className="card-title">{val.title}</h4>
                    <h5 className="card-title">${val.price}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">Brand: {val.brand}</p>
                    <p className="card-text text-success">Discount Offer: ${val.discountPercentage}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">{val.description}</p>
                    <p className="card-text">Rating: {val.rating}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-muted">Last Updated 3 mins ago</p>
                    <div className="d-flex flex-row justify-content-around align-items-center gap-1">
                    <button className="btn btn-outline-success" onClick={handleInc}>+</button>
                    <p>{count}</p>
                    <button className="btn btn-outline-danger" onClick={handleDec}>-</button>
                    </div>
                   
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-text">Original Price:</h5>
                    <h5 className="card-text">${val.price}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p>Discount Amount:</p>
                    <p className="card-text text-success">$ {discountedPrice}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">Final Price</p>
                    <p className="card-text">${FinalPrice}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center" >
                    <p className="card-text">Total Amount:</p>
                    <p className="card-text">${FinalPrice * count}</p>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <button className="btn btn-primary">Proceed to Pay</button>
                </div>
            </div>
        </div>

                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    </div>
   )
}
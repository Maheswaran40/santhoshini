
  const products=[
    {
      "id": 1,
      "name": "Wireless Headphones",
      "category": "Electronics",
      "price": 2499,
      "oldPrice": 2999,
      "rating": 4.5,
      "stock": 15,
      "brand": "Sony",
      "image": "https://picsum.photos/300?random=1",
      "description": "High-quality wireless headphones with deep bass."
    },
    {
      "id": 2,
      "name": "Smart Watch",
      "category": "Electronics",
      "price": 3499,
      "oldPrice": 3999,
      "rating": 4.3,
      "stock": 10,
      "brand": "Noise",
      "image": "https://picsum.photos/300?random=2",
      "description": "Fitness tracking smartwatch with heart rate monitor."
    },
    {
      "id": 3,
      "name": "Men's T-Shirt",
      "category": "Fashion",
      "price": 599,
      "oldPrice": 799,
      "rating": 4.2,
      "stock": 25,
      "brand": "Levis",
      "image": "https://picsum.photos/300?random=3",
      "description": "100% cotton casual t-shirt."
    },
    {
      "id": 4,
      "name": "Women's Handbag",
      "category": "Fashion",
      "price": 1499,
      "oldPrice": 1899,
      "rating": 4.6,
      "stock": 12,
      "brand": "Lavie",
      "image": "https://picsum.photos/300?random=4",
      "description": "Stylish leather handbag for everyday use."
    },
    {
      "id": 5,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 1999,
      "oldPrice": 2499,
      "rating": 4.4,
      "stock": 18,
      "brand": "JBL",
      "image": "https://picsum.photos/300?random=5",
      "description": "Portable Bluetooth speaker with rich sound."
    },
    {
      "id": 6,
      "name": "Running Shoes",
      "category": "Footwear",
      "price": 2799,
      "oldPrice": 3299,
      "rating": 4.7,
      "stock": 20,
      "brand": "Puma",
      "image": "https://picsum.photos/300?random=6",
      "description": "Comfortable running shoes for daily workouts."
    },
    {
      "id": 7,
      "name": "Backpack",
      "category": "Accessories",
      "price": 999,
      "oldPrice": 1299,
      "rating": 4.3,
      "stock": 30,
      "brand": "Wildcraft",
      "image": "https://picsum.photos/300?random=7",
      "description": "Water-resistant travel backpack."
    },
    {
      "id": 8,
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 1299,
      "oldPrice": 1599,
      "rating": 4.5,
      "stock": 22,
      "brand": "Logitech",
      "image": "https://picsum.photos/300?random=8",
      "description": "RGB gaming mouse with programmable buttons."
    }
  ]

  let username=localStorage.getItem("username")
// document.getElementById("homeh1").innerHTML=`HI ${username}`


function showProduct(){
    let data=""
    products.map((v)=>(
        data+=`
         <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card h-100 shadow border-0">

        <img src="${v.image}" class="card-img-top p-3" style="height:220px; object-fit:contain;" alt="${v.name}">

        <div class="card-body d-flex flex-column">

            <span class="badge bg-primary mb-2 w-50">${v.category}</span>

            <h5 class="card-title">${v.name}</h5>

            <p class="card-text text-muted small">
                ${v.description}
            </p>

            <div class="mb-2">
                <span class="fs-4 fw-bold text-success">₹${v.price}</span>
                <del class="text-muted ms-2">₹${v.oldPrice}</del>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge bg-success">
                    ⭐ ${v.rating}
                </span>

                <span class="text-danger fw-semibold">
                    ${v.stock} Left
                </span>
            </div>

            <button class="btn btn-primary w-100 mb-2">
                Add to Cart
            </button>

            <button class="btn btn-outline-dark w-100">
                View Details
            </button>

        </div>

    </div>
</div>
        `
    ))
    document.getElementById("showPro").innerHTML=data
}

showProduct()



function searchFun(e){
e.preventDefault()
let searchInput=document.getElementById("input").value
alert(searchInput)

let searchOutput=products.filter((v)=>v.name.trim().toLowerCase().includes(searchInput.trim().toLowerCase()))
console.log("searchOutput",searchOutput);


let data=""
    searchOutput.map((v)=>(
        data+=`
         <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
    <div class="card h-100 shadow border-0">

        <img src="${v.image}" class="card-img-top p-3" style="height:220px; object-fit:contain;" alt="${v.name}">

        <div class="card-body d-flex flex-column">

            <span class="badge bg-primary mb-2 w-50">${v.category}</span>

            <h5 class="card-title">${v.name}</h5>

            <p class="card-text text-muted small">
                ${v.description}
            </p>

            <div class="mb-2">
                <span class="fs-4 fw-bold text-success">₹${v.price}</span>
                <del class="text-muted ms-2">₹${v.oldPrice}</del>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge bg-success">
                    ⭐ ${v.rating}
                </span>

                <span class="text-danger fw-semibold">
                    ${v.stock} Left
                </span>
            </div>

            <button class="btn btn-primary w-100 mb-2">
                Add to Cart
            </button>

            <button class="btn btn-outline-dark w-100">
                View Details
            </button>

        </div>

    </div>
</div>
        `
    ))
    document.getElementById("searchdata").innerHTML=data
}
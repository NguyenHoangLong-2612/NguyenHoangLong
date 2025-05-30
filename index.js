function renderBox (parentClass, category) {
  const parent = document.querySelector(parentClass); 
  fetch("./json/db.json").then(function (response) {
    return response.json(); 
  }).then(function (data) {
    let products = data["products"]

    let listQuan = []; 
    for (let index = 0; index < products.length; index ++) {
        let product = products[index]; 
        if (product.category == category) {
          listQuan.push(product); 
        }
    }
    
    let output = ""; 
    for (let index = 0; index < listQuan.length ; index += 1) {
       let product = listQuan[index];
        output += `<div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="box">
                                <div class="img">
                                   <img src="${product.image_url}" alt="">
                                </div>
                                <div class="box-desc">
                                    <h3>${product.name}</h3>
                                    <h4>${product.price}</h4>
                                </div>
                            </div>
                        </div>`
    }
    parent.innerHTML = output
  })
}

renderBox(".trourser", "quan"); 
renderBox(".ao", "ao"); 

const userLogged = JSON.parse(localStorage.getItem("user-logged"))
const userLogin = document.querySelector(".login");
let output = ""; 
if (userLogged) {
  output = `
   <span class="user-name">
      <i class="fa-solid fa-user"></i>
        Lucasss
    </span>
     <span class="logout">
        <i class="fa-solid fa-right-from-bracket"></i>
      </span>
  `
} else {
  output = `
     <a href="login.html">
        <button> Login </button>
      </a>`
}
userLogin.innerHTML = output

const buttonLogout = document.querySelector(".logout"); 
buttonLogout.addEventListener("click", function () {
  localStorage.removeItem("user-logged")
  window.location.reload();
})


const buttonShowMenu = document.querySelector(".button-show-menu");
buttonShowMenu.addEventListener("click", function () {
    const listMenu = document.querySelector(".navigation");
    listMenu.classList.toggle("show"); 
})
 






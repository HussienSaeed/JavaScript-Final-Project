let navBtn = document.getElementById("navBtn")
let dropNav = document.querySelector(".drop-nav")

navBtn.addEventListener("click",function(){
    dropNav.classList.toggle("d-block")
})
//
let slider = document.getElementById("slider")
let right = document.getElementById("right")
let left = document.getElementById("left")





let imgs = ["url(images/1.jpg)","url(images/2.jpg)","url(images/3.jpg)","url(images/4.jpg)"]
let i = 0 ; 

function slideRight(){
    i++
    if(i==4){
        i=0;
    }
    slider.style.backgroundImage = imgs[i];

}
function slideLeft(){
    if(i==0){
            i=4;
    }
    i--
    slider.style.backgroundImage = imgs[i]
    
}


right.addEventListener("click",slideRight)

left.addEventListener("click",slideLeft)
var myInterval = setInterval(function () {
  slideRight();
},3000);
document.getElementById("right").addEventListener("click", () => {
  next();
  clearInterval(myInterval);
});

document.getElementById("left").addEventListener("click", () => {
  slideLeft();
  clearInterval(myInterval);
});

//Add to cart and save in cookies
function setCookie(key, value, days) {
  let date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = `${key}=${value};expires=${date}`;
}

function deleteCookie(key) {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  document.cookie = `${key}=dummy;expires=${date}`;
}

function getCookie(name) {
  let cookies = document.cookie;
  cookies = cookies.split(";");
  for (var i = 0; i < cookies.length; i++) {
    let keyValue = cookies[i].split("=");
    for (var j = 0; j < keyValue.length; j++) {
      if (name == keyValue[j].trim()) {
        return keyValue[j + 1];
      }
    }
  }
}

function hasCookie(name) {
  let cookies = document.cookie;
  cookies = cookies.split(";");
  for (var i = 0; i < cookies.length; i++) {
    let keyValue = cookies[i].split("=");
    for (var j = 0; j < keyValue.length; j++) {
      if (name == keyValue[j].trim()) {
        return true;
      }
    }
  }
  return false;
}

let counter;
if (hasCookie("counter")) {
  counter = parseInt(getCookie("counter"));
} else {
  counter = "0";
  setCookie("counter", counter, 1);
}
document.getElementById("cart-counter").innerHTML = counter;

//Animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')

    }
  });
}
);
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Category-Filter

var products = [
  {
    desc: "Cars",
    price: 200,
    src: "./images/Cars/1.png",
  },
  {
    desc: "Cars",
    price: 300,
    src: "./images/Cars/2.png",
  },
  {
    desc: "Cars",
    price: 440,
    src: "./images/Cars/3.png",
  },
  {
    desc: "Cars",
    price: 500,
    src: "./images/Cars/4.png",
  },
  {
    desc: "Cars",
    price: 400,
    src: "./images/Cars/5.png",
  },
  {
    desc: "Cars",
    price: 900,
    src: "./images/Cars/6.png",
  },
  {
    desc: "Cars",
    price: 550,
    src: "./images/Cars/7.png",
  },
  {
    desc: "Cars",
    price: 600,
    src: "./images/Cars/8.png",
  },
  {
    desc: "Cars",
    price: 1000,
    src: "./images/Cars/9.png",
  },
  {
    desc: "Electronics",
    price: 200,
    src: "./images/Electronics/1.png",
  },
  {
    desc: "Electronics",
    price: 520,
    src: "./images/Electronics/2.png",
  },
  {
    desc: "Electronics",
    price: 350,
    src: "./images/Electronics/3.png",
  },
  {
    desc: "Electronics",
    price: 390,
    src: "./images/Electronics/4.png",
  },
  {
    desc: "Electronics",
    price: 450,
    src: "./images/Electronics/5.png",
  },
  {
    desc: "Electronics",
    price: 550,
    src: "./images/Electronics/6.png",
  },
  {
    desc: "Electronics",
    price: 400,
    src: "./images/Electronics/7.png",
  },
  {
    desc: "Electronics",
    price: 600,
    src: "./images/Electronics/8.png",
  },
  {
    desc: "Electronics",
    price: 500,
    src: "./images/Electronics/9.png",
  },
  {
    desc: "Clothing",
    price: 3,
    src: "./images/Clothing/1.png",
  },
  {
    desc: "Clothing",
    price: 70,
    src: "./images/Clothing/2.png",
  },
  {
    desc: "Clothing",
    price: 80,
    src: "./images/Clothing/3.png",
  },
  {
    desc: "Clothing",
    price: 90,
    src: "./images/Clothing/4.png",
  },
  {
    desc: "Clothing",
    price: 54,
    src: "./images/Clothing/5.png",
  },
  {
    desc: "Clothing",
    price: 53,
    src: "./images/Clothing/6.png",
  },
  {
    desc: "Clothing",
    price: 45,
    src: "./images/Clothing/7.png",
  },
  {
    desc: "Clothing",
    price: 7,
    src: "./images/Clothing/8.png",
  },
  {
    desc: "Clothing",
    price: 99,
    src: "./images/Clothing/9.png",
  },
  {
    desc: "Motors",
    price: 130,
    src: "./images/Motors/1.png",
  },
  {
    desc: "Motors",
    price: 170,
    src: "./images/Motors/2.png",
  },
  {
    desc: "Motors",
    price: 180,
    src: "./images/Motors/3.png",
  },
  {
    desc: "Motors",
    price: 190,
    src: "./images/Motors/4.png",
  },
  {
    desc: "Motors",
    price: 120,
    src: "./images/Motors/5.png",
  },
  {
    desc: "Motors",
    price: 153,
    src: "./images/Motors/6.png",
  },
  {
    desc: "Motors",
    price: 145,
    src: "./images/Motors/7.png",
  },
  {
    desc: "Motors",
    price: 150,
    src: "./images/Motors/8.png",
  },
  {
    desc: "Motors",
    price: 100,
    src: "./images/Motors/9.png",
  }
];

//Create-Products

let categoriesDiv = document.querySelector(".categories");

let productDiv, productImg, productDesc, productPrice;

function createProductDiv(arr) {
  for (let i = 0; i < arr.length; i++) {
    productDiv = document.createElement("div");
    productImg = document.createElement("img");
    productDesc = document.createElement("p");
    productPrice = document.createElement("p");
    productAdd = document.createElement("p");
    productDiv.classList.add("product");
    productImg.classList.add("product-img");
    productDesc.classList.add("product-p");
    productPrice.classList.add("product-p");
    productAdd.classList.add("add");
    productAdd.innerHTML = "Add to cart +";
    productAdd.addEventListener("click", function () {
      counter = parseInt(getCookie("counter"));
      setCookie("counter", ++counter, 1);
      document.getElementById("cart-counter").innerHTML = counter;
    });
    productDiv.appendChild(productImg);
    productDiv.appendChild(productDesc);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productAdd);
    categoriesDiv.appendChild(productDiv);
  }
}

createProductDiv(products);
changeBrand(products);

//Remove-Product

function removeProductDiv() {
  while (categoriesDiv.hasChildNodes()) {
    categoriesDiv.removeChild(categoriesDiv.lastChild);
  }
}

function changeBrand(dataSet) {
  for (let i = 0; i < dataSet.length; i++) {
    categoriesDiv.children[i].children[0].setAttribute("src", dataSet[i].src);
    categoriesDiv.children[i].children[1].innerHTML = dataSet[i].desc;
    categoriesDiv.children[i].children[2].innerHTML = `${dataSet[i].price} $`;
  }
}

document.getElementById("all").addEventListener("click", function () {
  removeProductDiv();
  createProductDiv(products);
  changeBrand(products);
});

//Get-Category-Names

let categoryNames = [];
for (let i = 0; i < products.length; i++) {
  categoryNames.push(products[i].desc);
}
console.log(categoryNames);

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
categoryNames = categoryNames.filter(onlyUnique);

//Add-Buttons

let brandsDiv = document.querySelector(".brands");
function createButton(name, div) {
  let btn = document.createElement("div");
  btn.classList.add("brand");
  div.appendChild(btn);
  btn.innerHTML = name;
  return btn;
}

for (let i = 0; i < categoryNames.length; i++) {
  let brand = createButton(categoryNames[i], brandsDiv);
  console.log(brand);
  brand.addEventListener("click", () => {
    let arr = products.filter((element) => {
      return element.desc == categoryNames[i];
    });
    removeProductDiv();
    createProductDiv(arr);
    changeBrand(arr);
  });
}

//Redirection

let home = document.querySelectorAll(".home");
let about = document.querySelectorAll(".about");
let contact = document.querySelectorAll(".contact");

function redirect(node, url) {
  for (let i = 0; i < node.length; i++) {
    node[i].addEventListener("click", function () {
      location.href = url;
    });
  }
}


redirect(home, "./index.html");
redirect(contact, "./contact.html");
redirect(about, "./about.html");
let username = document.querySelector("input[id=name]")
let iconWrong1 = document.querySelector(".icon-wrong1")
let iconRight1 = document.querySelector(".icon-right1")
let nameError = document.querySelector(".error-name")
username.addEventListener("input", function () {
    if (/^\S[a-z A-Z]{2,15}$/.test(this.value)) {
        this.style.border = "1px solid green"
        nameError.style.visibility = "hidden"
        iconWrong1.style.visibility = "hidden"
        iconRight1.style.visibility = "visible"
    } else {
        this.style.border = "1px solid red"
        iconRight1.style.visibility = "hidden"
        nameError.style.visibility = "visible"
        iconWrong1.style.visibility = "visible"

    }
})





let phone = document.querySelector("input[id=phone]")
// let phoneError = document.querySelector(".error-phone")
let iconWrong2 = document.querySelector(".icon-wrong2")
let iconRight2 = document.querySelector(".icon-right2")


let email = document.querySelector("input[id=email]")
let emailError = document.querySelector(".error-email")
let iconWrong3 = document.querySelector(".icon-wrong3")
let iconRight3 = document.querySelector(".icon-right3")
email.addEventListener("input", function () {
    if (/^[a-zA-Z0-9_.-]{2,15}@[a-z]{2,10}.com$/.test(email.value)) {
        this.style.border = "1px solid green"
        emailError.style.visibility = "hidden"
        iconWrong3.style.visibility = "hidden"
        iconRight3.style.visibility = "visible"
    } else {
        this.style.border = "1px solid red"
        iconRight3.style.visibility = "hidden"
        emailError.style.visibility = "visible"
        iconWrong3.style.visibility = "visible"
    }
})

document.getElementById("submit").addEventListener("click", function (e) {
 

    if(!/^\S[a-z A-Z]{6,15}$/.test(username.value) ){
        e.preventDefault()
        username.style.border = "1px solid red"
        iconRight1.style.visibility = "hidden"
        iconWrong1.style.visibility = "visible"
        nameError.style.visibility = "visible"
    }
   
    
    if(!/^[a-zA-Z0-9_.-]{2,15}@[a-z]{2,10}.com$/.test(email.value) ){
        e.preventDefault()
        email.style.border = "1px solid red"
        iconRight3.style.visibility = "hidden"
        iconWrong3.style.visibility = "visible"
        emailError.style.visibility = "visible"
}
})


    let home = document.querySelectorAll(".home");
let about = document.querySelectorAll(".about");
let contact = document.querySelectorAll(".contact");

//home about contact redirection

function redirect(node, url) {
  for (let i = 0; i < node.length; i++) {
    node[i].addEventListener("click", function() {
      location.href = url;
    });
  }
}

redirect(home,"./index.html");
redirect(about,"./about.html");
redirect(contact,"./contact.html");


//counter

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

counter=parseInt(getCookie("counter"))
document.getElementById("cart-counter").innerHTML = counter;
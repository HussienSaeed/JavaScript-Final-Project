let navBtn = document.getElementById("navBtn")
let dropNav = document.querySelector(".drop-nav")

navBtn.addEventListener("click",function(){
    dropNav.classList.toggle("d-block")
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
//Animation

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
console.log(entry)
if(entry.isIntersecting){
  entry.target.classList.add('show')
}else{  
 entry.target.classList.remove('show') }
 });
}
);
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

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
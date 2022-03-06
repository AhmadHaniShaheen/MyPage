let form = document.getElementById("form");
let nameP = document.getElementById("forName");
let email1 = document.getElementById("forEmail");
let errorM = document.getElementById("errormassage");
let emailF = document.getElementById("emailFor");
let overdow = document.querySelector(".forFun");

form.addEventListener("submit", (e) => {
  let massages = [];
  if (nameP.value == "" || nameP.value == null) {
    massages.push("This feld is requered");
  }

  e.preventDefault();
  errorM.innerHTML = massages.join(" ,");
  errorM.style.fontSize = "10";
  errorM.style.color = "red";
  errorM.style.marginBottom = "10px";
});

form.addEventListener("submit", (h) => {
  let massages1 = [];
  // let validEmail=( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (email1 == null) {
    massages1.push("This feld is requered");
  } else {
    massages1.push("");
  }
  h.preventDefault();
  emailF.innerHTML = massages1.join();
  emailF.style.fontSize = "10";
  emailF.style.color = "red";
  emailF.style.marginBottom = "10px";
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector("#navid");
  nav.classList.toggle("stuky", window.scrollY > 0);
});

window.onload = function () {
  document.getElementById("downloud").addEventListener("click", () => {
    const involve = document.getElementById("involve");
    console.log(involve);
    console.log(window);
    html2pdf().from(involve).save();
  });
};
// let load=document.getAnimations("loader");
// setTimeout (function(){
//     if(load.style.display="block"){
//         load.style.display="none"
//     }
//     else{
//         load.style.display="none"
//     }
// },2000)

// function onover() {
// //   overdow.style.transform = "rotate(360deg)";
//   // transform: rotate(360deg);

// }

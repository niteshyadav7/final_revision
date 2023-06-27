//  HOW TO SELECT
document.querySelector(".className"); //class
document.querySelector("#id_name"); //id

// HOW TO MANIPULATE
document.querySelector(".header").textContent = "Namaste Nitesh";

// HOW TO ADD STYLE
document.querySelector(".header").style.color = "blue";


// HOW TO CREATE PARA USING JS.
const sec = document.querySelector("section");
const para = document.createElement("p");
para.innerHTML = "Hello Nitesh this is me";
sec.appendChild(para);

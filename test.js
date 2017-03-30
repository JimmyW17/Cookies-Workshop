var sugar = document.querySelector("#button1");
var chocolate = document.querySelector("#button2");
var lemon = document.querySelector("#button3");

var sugarValue = 0;
var chocolateValue = 0;
var lemonValue = 0;

Cookies.set("Sugar", sugarValue);
Cookies.set("Chocolate", chocolateValue);
Cookies.set("Lemon", lemonValue);

sugar.addEventListener("click", function(){
  event.preventDefault();
    sugarValue + 1;
    Cookies.set("Sugar", sugarValue);
});

chocolate.addEventListener("click", function(){
  event.preventDefault();
    chocolateValue + 1;
    Cookies.set("Chocolate", chocolateValue);
});

lemon.addEventListener("click", function(){
  event.preventDefault();
    lemonValue + 1;
    Cookies.set("Lemon", lemonValue);
});

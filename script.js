var sugarButton = document.getElementById("sugar");
var sugarCount = document.getElementById("sugarCount");
var sugarValue =  Cookies.get("Sugar"); // Default value is undefined
var chocolateButton = document.getElementById("chocolate");
var chocolateCount = document.getElementById('chocolateCount');
var chocolateValue = Cookies.get("Chocolate"); // Default value is undefined
var lemonButton = document.getElementById("lemon");
var lemonCount = document.getElementById('lemonCount');
var lemonValue = Cookies.get("Lemon"); // Default value is undefined
var deleteCookiesBtn = document.getElementById('deleteCookies');
var leftDiv = document.getElementsByClassName('floatLeft')[0];
var centerDiv = document.getElementsByClassName('center')[0];
var rightDiv = document.getElementsByClassName('floatRight')[0];
var cookieImg = "http://www.pngall.com/wp-content/uploads/2016/07/Cookie.png";

// Check if cookies are made yet...If not, then they should be undefined so these 'if conditions' sets their value to 0.
if(sugarValue === undefined ) {sugarValue = 0;}
if(chocolateValue === undefined ) {chocolateValue = 0;}
if(lemonValue === undefined ) {lemonValue = 0;}

window.onload =function() {
  if(Cookies.get("Sugar")) {
    Cookies.set("Sugar", sugarValue);
    sugarCount.innerHTML = Cookies.get("Sugar");
  }
  if(Cookies.get("Chocolate")) {
    Cookies.set("Chocolate", chocolateValue);
    chocolateCount.innerHTML = Cookies.get("Chocolate");
  }
  if(Cookies.get("Lemon")) {
    Cookies.set("Lemon", lemonValue);
    lemonCount.innerHTML = Cookies.get("Lemon");
  }
};

// Button event handlers
sugarButton.addEventListener("click", function() {
  sugarValue++;
  Cookies.set("Sugar", sugarValue);
  sugarCount.innerHTML = Cookies.get("Sugar");
  var createCookie = document.createElement('img');
  createCookie.setAttribute('id', 'cookie1');
  createCookie.src = cookieImg;
  leftDiv.appendChild(createCookie);
});

chocolateButton.addEventListener("click", function() {
  chocolateValue++;
  Cookies.set("Chocolate", chocolateValue);
  chocolateCount.innerHTML = Cookies.get("Chocolate");
  var createCookie = document.createElement('img');
  createCookie.setAttribute('id', 'cookie2');
  createCookie.src = cookieImg;
  centerDiv.appendChild(createCookie);
});

lemonButton.addEventListener("click", function() {
  lemonValue++;
  Cookies.set("Lemon", lemonValue);
  lemonCount.innerHTML = Cookies.get("Lemon");
  var createCookie = document.createElement('img');
  createCookie.setAttribute('id', 'cookie3');
  createCookie.src = cookieImg;
  rightDiv.appendChild(createCookie);
});

function deleteCookies() {
  document.cookie = "Sugar=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "Chocolate=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "Lemon=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  $('#sugarCount').empty();
  $('#chocolateCount').empty();
  $('#lemonCount').empty();
  sugarValue = 0;
  chocolateValue = 0;
  lemonValue = 0;
  setTopSugar = 200;
  setTopChocolate = 200;
  setTopLemon = 200;
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
  }
}


// jQuery Stuff
var setTopSugar = 200;
var setTopChocolate = 200;
var setTopLemon = 200;

function incrementTopSugar() {
  setTopSugar += 50;
}

function incrementTopChocolate() {
  setTopChocolate += 50;
}

function incrementTopLemon() {
  setTopLemon += 50;
}

$(document).ready(function() {
  $('#sugar').click(function() {
    $('#cookie1').animate({top: setTopSugar+"px"}, 400, function() {
      $('#cookie1').removeAttr('id'), incrementTopSugar();
    });
  });

  $('#chocolate').click(function() {
    $('#cookie2').animate({top: setTopChocolate+"px"}, 400, function() {
      $('#cookie2').removeAttr('id'), incrementTopChocolate();
    });
  });

  $('#lemon').click(function() {
    $('#cookie3').animate({top: setTopLemon+"px"}, 400, function() {
      $('#cookie3').removeAttr('id'), incrementTopLemon();
    });
  });

  $('#deleteCookies').click(function() {
    $('img').effect('puff', function() {
      deleteCookies();
    });
  });
});


// Stolen scripts

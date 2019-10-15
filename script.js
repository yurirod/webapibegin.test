//script.js
var request = new XMLHttpRequest();
request.open('get','http://hplussport.com/api/products?qty=2&order=name');
request.onload = function(){
    var response = request.response;
    console.log(typeof response);
    var jsonData = JSON.parse(response);
    console.log(jsonData);
    console.log(typeof jsonData);
    var products = document.getElementById('products');
    jsonData.forEach(function(element) {
       var product = document.createElement('li'); 
       product.innerHTML = element.name;
       products.appendChild(product);
    });
};
request.send();

var total_Price = 0
var products = document.querySelectorAll(".product li")
var div = document.querySelector("#showPrice")
var div1 = document.querySelector(".total")
var btn = document.querySelector("#show")

products.forEach(function (x) {
    x.onclick = function () {
        div.innerHTML += x.textContent  + " ## "   
        total_Price += +(x.getAttribute("price"))
        if(div.innerHTML != ""){
            btn.style.display = "block"
        }

    }
})

btn.onclick = function () {
    div1.innerHTML = total_Price
}
function tooglePrice(){
    const basicPrice = document.getElementById("basic-price");
    const professionalPrice = document.getElementById("professional-price");
    const masterPrice = document.getElementById("master-price");
    const boton = document.getElementById("btnPrice");
    if (boton.textContent === "Anually") {
        boton.textContent = "Monthly";
        basicPrice.textContent = "$199.99";
        professionalPrice.textContent = "$249.99";
        masterPrice.textContent = "$399.99";
    }
    else {
        boton.textContent = "Anually";
        basicPrice.textContent = "$19.99";
        professionalPrice.textContent = "$24.99";
        masterPrice.textContent = "$39.99";
    }
}
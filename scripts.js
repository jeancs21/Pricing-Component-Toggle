function tooglePrice(){
    const basicPrice = document.getElementById("basic-price");
    const professionalPrice = document.getElementById("professional-price");
    const masterPrice = document.getElementById("master-price");
    const chk = document.getElementById("checkInput");
    if (chk.checked == true) {
        basicPrice.textContent = "$19.99";
        professionalPrice.textContent = "$24.99";
        masterPrice.textContent = "$39.99";
    }
    else {
        basicPrice.textContent = "$199.99";
        professionalPrice.textContent = "$249.99";
        masterPrice.textContent = "$399.99";
    }
}
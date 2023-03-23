function togglenav(){
    let navbar = document.getElementById("navbar");
    if (navbar.style.display === "none") {
        navbar.style.display = "flex";
        document.getElementById("myCart").classList.add("myCart-low");
    }
    else {
        navbar.style.display = "none";
        document.getElementById("myCart").classList.remove("myCart-low");  
    }
}

window.onscroll = function() {scrollfunction()};
function scrollfunction(){
    let backtotop = document.getElementsByClassName("backtotop")[1];
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        backtotop.style.display = "flex";
    } else {
        backtotop.style.display = "none";
    }
}

var currentslide = 0;
function changeslide(n){
    let reviews = document.getElementsByClassName("review");
    let dots = document.getElementsByClassName("dot");
    if ((currentslide+n) >= reviews.length){
        currentslide = 0;
    }
    else if ((currentslide+n) < 0){
        currentslide = reviews.length - 1;
    }
    else {
        currentslide += n;
    }
    for (let i=0; i < reviews.length; i++){
        reviews[i].style.display = "none";
        dots[i].className = "dot"
    }
    reviews[currentslide].style.display = "grid";
    dots[currentslide].className += " activedot";
}

function setslide(n){
    let reviews = document.getElementsByClassName("review");
    let dots = document.getElementsByClassName("dot");
    currentslide = n;
    for (let i=0; i < reviews.length; i++){
        reviews[i].style.display = "none";
        dots[i].className = "dot"
    }
    reviews[currentslide].style.display = "grid";
    dots[currentslide].className += " activedot";
}

function init(){
    let reviews = document.getElementsByClassName("review");
    let reviewholder = document.getElementsByClassName("dots")[0];
    for (let i=0; i<reviews.length; i++){
        let dot = document.createElement("span");
        dot.className = "dot";
        dot.setAttribute("onclick", `setslide(${i})`);
        reviewholder.appendChild(dot);
    }
    setslide(0);

    let bookcart = [];
    try {
        bookcart = JSON.parse(localStorage.bookcart);
    } catch (e) {
        localStorage.bookcart = JSON.stringify(new Array(0));
        bookcart = new Array(0);
    }

    let atcbuttons = document.getElementsByClassName("add-to-cart");
    let booktitle = document.querySelectorAll(".booktitle h2");
    for (let i=0; i<atcbuttons.length; i++){
        let atcbut = atcbuttons[i];
        let booktitl = booktitle[i].textContent ;
        let clsname = booktitl.replaceAll(" ", "-")
        atcbut.classList.add(`atc-${clsname}`);
        atcbut.setAttribute("onclick", `addtocart("atc-${clsname}")`);
        try {
            if (bookcart.some((ele) => {return ele==booktitl})){
                atcbut.classList.add("carted");
            } else {
                atcbut.classList.add("atc");
            }
        } catch (e) {
            console.log(e)
        }
    }

}

function addtocart(clsname){
    let atcbuttons = document.getElementsByClassName(clsname);

    const bookname = clsname.slice(4).replaceAll("-", " ");
    let bookcart = JSON.parse(localStorage.bookcart);
    if (bookcart.some((ele) => {return ele==bookname})){
        bookcart = bookcart.filter((ele) => {return (ele!==bookname)});
    } else {
        bookcart.push(bookname);
    }
    localStorage.bookcart= JSON.stringify(bookcart);

    for (let i=0; i<atcbuttons.length; i++){
        let atcbutton = atcbuttons[i];
        atcbutton.classList.toggle("carted");
        atcbutton.classList.toggle("atc");
    }
    showcart(0);
}

function showcart(toggletrue){
    const showcarts = document.getElementsByClassName("cartmenu");
    let myCart = document.getElementById("myCart");
    if (!showcarts[0].classList.contains("active") || !toggletrue){
        const bookcart = JSON.parse(localStorage.bookcart);
        let out;
        if (bookcart.length){
            out = "<h1><span>Your Cart</span></h1>";
            out += "<ul class=\'cartlist\'>";
            for (let i=0; i<bookcart.length; i++){
                out += `<li>${bookcart[i]}</li>`;
            }
            out += "</ul>";
        } else {
            out = "<h1>Your Cart is <span>Empty</span></h1>";
        }
        myCart.innerHTML = out;
        myCart.style.display = "flex";
    } else {
        myCart.style.display = "none";
    }
    if (toggletrue){
        for (let i=0; i<2; i++){
            showcarts[i].classList.toggle("active")
        }
    }
}
function togglenav(){
    let navbar = document.getElementById("navbar");
    if (navbar.style.display === "none") {navbar.style.display = "flex";}
    else {navbar.style.display = "none"}
}

window.onscroll = function() {scrollfunction()};
function scrollfunction(){
    let backtotop = document.getElementsByClassName("backtotop")[1];
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        backtotop.style.display = "block";
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
}
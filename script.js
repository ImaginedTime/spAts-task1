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
    }
    console.log(reviews);
    console.log(currentslide);
    reviews[currentslide].style.display = "grid";
}
changeslide(0);
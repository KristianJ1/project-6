var submitButton = $(".submitbutton");

var secondPage = $(".submit-box");

var firstPage = $(".rating-box");

const rating = document.querySelectorAll(".rating");

const span = document.querySelector(".number");


submitButton.on("click", function (){
    firstPage.css({display : "none"});
    secondPage.css({display: "flex"});
})


rating.forEach(element => {
    element.addEventListener("click", function(){
        span.innerHTML = element.innerHTML;
    })
    })



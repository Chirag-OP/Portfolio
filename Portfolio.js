function PageToggler(){
    let target=document.querySelector(".learnMoreBtn");
    target.addEventListener("click", function(){
        document.querySelector(".page1").classList.remove("active");
        document.querySelector(".page2").classList.add("active");
    })
    let target2=document.querySelector(".goBackBtn");
    target2.addEventListener("click", function(){
        document.querySelector(".page2").classList.remove("active");
        document.querySelector(".page1").classList.add("active");
    })
}
function iconToggler(){
    let target=document.querySelector(".toggleBtn");
    target.addEventListener("click",function(){
        document.querySelector(".navBar").classList.toggle("active");
    })
}
PageToggler();
iconToggler();
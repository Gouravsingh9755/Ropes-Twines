function Page6kaBadaCode(){
// var lb = document.querySelector(".l-content-p6");
// var lboxh1 = document.querySelector(".l-content-p6 h1");
// var lcircle = document.querySelector(".circle-l-p6");
// var teer1 = document.querySelector(".teer1");

// console.log(teer1);

// lb.addEventListener("mouseenter", function(){
//     lboxh1.style.color = "#ffa71a"
//     lcircle.style.border = "6px solid #ffa71a"
//     teer1.style.color = "#ffa71a"
// })

// lb.addEventListener("mouseleave", function(){
//     lboxh1.style.color = "black"
//     lcircle.style.border = "6px solid black"
//     teer1.style.color = "black"
// })

// // page6-rightbox

// var rb = document.querySelector(".r-content-p6");
// var rboxh1 = document.querySelector(".r-content-p6 h1");
// var rcircle = document.querySelector(".circle-r-p6");
// var teer2 = document.querySelector(".teer2");

// console.log(teer1);

// rb.addEventListener("mouseenter", function(){
//     rboxh1.style.color = "#ffa71a"
//     rcircle.style.border = "6px solid #ffa71a"
//     teer2.style.color = "#ffa71a"
// })

// rb.addEventListener("mouseleave", function(){
//     rboxh1.style.color = "black"
//     rcircle.style.border = "6px solid black"
//     teer2.style.color = "black"
// })
}

// ---------------------- Short Code ----------


function page6kaeffect(){

var dabba = document.querySelectorAll(".dabba")
dabba.forEach(function(eachbox){

    eachbox.addEventListener("mouseenter", ()=>{
        // console.log(eachbox.children);
        eachbox.children[0].style.color = "#ffa71a"
        eachbox.children[1].style.border = "6px solid #ffa71a"
        // arrow 
        eachbox.children[1].children[0].style.color = "#ffa71a"
        eachbox.children[1].children[0].style.margin = "0px 0px 0px 20px"
    })
    eachbox.addEventListener("mouseleave", ()=>{
        // console.log(eachbox.children);
        eachbox.children[0].style.color = "black"
        eachbox.children[1].style.border = "6px solid black"
        eachbox.children[1].children[0].style.color = "black"
        eachbox.children[1].children[0].style.margin = "0px 0px 0px 0px"

    })
});

};
page6kaeffect()



function page7hovereffect(){

var anim = document.querySelectorAll(".anim")

anim.forEach(function(ekek){

    ekek.addEventListener("mouseenter", ()=>{
        ekek.children[0].style.scale = "1.1"
    })
    ekek.addEventListener("mouseleave", ()=>{
        ekek.children[0].style.scale = "1"
    })

})
}

page7hovereffect ()
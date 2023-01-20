let scrool = document.querySelector("header")

scrool.onscroll = function (){

}

// 
let active = document.querySelectorAll("header ul li a")

active.forEach(function(ele){
    ele.onclick= function(){
        active.forEach(function(ele){
             ele.classList.remove("active")
        })
        this.classList.add("active")
    }    
})  
// 

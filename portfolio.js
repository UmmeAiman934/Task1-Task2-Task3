const links = document.querySelectorAll("nav a");

links.forEach(link=>{
link.addEventListener("click",()=>{
console.log("Navigating...");
});
});

window.addEventListener("scroll",()=>{
const navbar = document.querySelector("nav");

if(window.scrollY > 50){
navbar.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
}else{
navbar.style.boxShadow = "none";
}
});

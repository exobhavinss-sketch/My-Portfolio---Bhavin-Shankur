// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});
});
});


// dark mode
const toggle=document.getElementById("darkModeToggle");

toggle.onclick=()=>{
document.body.classList.toggle("dark");
}


// lightbox gallery
const images=document.querySelectorAll(".gallery img");
const lightbox=document.getElementById("lightbox");
const lightImg=document.getElementById("lightbox-img");
const close=document.getElementById("close");

images.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex";
lightImg.src=img.src;
});
});

close.onclick=()=>{
lightbox.style.display="none";
}

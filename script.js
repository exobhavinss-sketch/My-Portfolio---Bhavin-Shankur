// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
});
});
});

// open certificate
function openImage(src){
window.open(src, "_blank");
}

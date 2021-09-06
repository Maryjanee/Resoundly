

const mobileNavBtn = document.querySelector('.mobile-nav'); 
const mobileNav = document.querySelector('.mobile-nav-display');
const closeNavBtn = document.querySelector('.close-nav');
 
mobileNavBtn.addEventListener('click', ()=> {
  mobileNav.classList.remove("hidden");
});

closeNavBtn.addEventListener('click', ()=> {
  mobileNav.classList.add("hidden");
});

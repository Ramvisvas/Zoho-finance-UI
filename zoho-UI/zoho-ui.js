// all products popup
const productAllBtn = document.getElementById("product-btn");
const popUpMenu = document.querySelector(".navbar-container .popup-menu");
productAllBtn.addEventListener("mouseover",() => {
  popUpMenu.classList.remove("hide");
});
popUpMenu.addEventListener("mouseleave", () => {
  popUpMenu.classList.add("hide");
});
// sticky navbar // 
const contentNav = document.querySelector(".section-1-cover .content-nav");
document.addEventListener("scroll",()=>{
   if(window.scrollY > 146){
    contentNav.classList.add('sticky');
   }
   else{
    contentNav.classList.remove('sticky');
   }
  })
  
// contact button //
const contactBtn = document.querySelector(".contact-btn");
let interval = 5000;

const contactShow = ()=>{
  setInterval(()=>{
    contactBtn.classList.remove("hide");
  },interval)
}

// content details //
const invoiceContent = document.querySelector(".menu-content .tag-1-content");
const booksContent = document.querySelector(".menu-content .tag-2-content");
const inventoryContent = document.querySelector(".menu-content .tag-3-content");
const subscriptionContent = document.querySelector(".menu-content .tag-4-content");
const expenseContent = document.querySelector(".menu-content .tag-5-content");
const checkoutContent = document.querySelector(".menu-content .tag-6-content");
const payrollContent = document.querySelector(".menu-content .tag-7-content");
// all off function //
function contentOff(pos) {
  invoiceContent.classList.add("hide");
  booksContent.classList.add("hide");
  inventoryContent.classList.add("hide");
  subscriptionContent.classList.add("hide");
  expenseContent.classList.add("hide");
  checkoutContent.classList.add("hide");
  payrollContent.classList.add("hide");
  if(pos === 0){
    invoiceContent.classList.remove("hide");
  }
  if(pos === 1){
    booksContent.classList.remove("hide");
  }
  if(pos === 2){
    inventoryContent.classList.remove("hide");
  }
  if(pos === 3){
    subscriptionContent.classList.remove("hide");
  }
  if(pos === 4){
    expenseContent.classList.remove("hide");
  }
  if(pos === 5){
    checkoutContent.classList.remove("hide");
  }
  if(pos === 6){
    payrollContent.classList.remove("hide");
  }
  
}
// button function //
document.addEventListener("DOMContentLoaded", () => {
  invoiceContent.classList.remove("hide");
  tabElements[0].classList.add("underline");
  contactShow();
});
// tab-element style //
const tabElements = document.querySelectorAll(".tab-element");
const tabElementClick = () => {
  for (let i = 0; i < tabElements.length; i++) {
    tabElements[i].addEventListener("click", () => {
      for (let j = 0; j < tabElements.length; j++) {
        if (j === i) {
          tabElements[j].classList.add("underline");
          contentOff(i);
        } else {
          tabElements[j].classList.remove("underline");
        }
      }
    });}};
tabElements.addEventListener("click", tabElementClick());



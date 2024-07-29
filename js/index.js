const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

let cartCount = 0;

function updateCartCount(event) {
  const cartIcon = document.querySelector('.cart-icon');
  const cartCountElement = cartIcon.querySelector('.cart-count');
  cartCount++;
  cartCountElement.textContent = cartCount;
  cartIcon.classList.add('animate');
  setTimeout(() => {
    cartIcon.classList.remove('animate');
  }, 500);
}

const productCartIcons = document.querySelectorAll('.product-item .icons li:last-child');

productCartIcons.forEach(icon => {
  icon.addEventListener('click', updateCartCount);
});

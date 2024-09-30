const products = [
  {
    name: 'Sony Playstation 5',
    url: 'images/playstation_5.png',
    type: 'gargets',
    price: 499.99,
  },
  {
    name: 'Samsung Galaxy',
    url: 'images/samsung_galaxy.png',
    type: 'gargets',
    price: 399.99,
  },
  {
    name: 'Cannon EOS Camera',
    url: 'images/cannon_eos_camera.png',
    type: 'gargets',
    price: 749.99,
  },
  {
    name: 'Swade Shoe',
    url: 'img/m-shoe-18.JPG',
    type: 'wears',
    price: '1500',
  },
  {
    name: 'Fun 203',
    url: 'furniture/f7.JPG',
    type: 'furniture',
    price: '50'
  },
  {
    name: 'Swade Shoe',
    url: 'img/m-shoe-19.JPG',
    type: 'wears',
    price: '1500',
  },
  {
    name: 'Swade Shoe',
    url: 'img/m-shoe-20.JPG',
    type: 'wears',
    price: '1500',
  },
  {
    name: 'Sony Playstation 5',
    url: 'images/playstation_5.png',
    type: 'gargets',
    price: 499.99,
  },
  {
    name: 'Samsung Galaxy',
    url: 'images/samsung_galaxy.png',
    type: 'gargets',
    price: 399.99,
  },
  {
    name: 'Fun 203',
    url: 'furniture/f6.JPG',
    type: 'furniture',
    price: '50'
  },
  {
    name: 'Cannon EOS Camera',
    url: 'images/cannon_eos_camera.png',
    type: 'gargets',
    price: 749.99,
  },
  {
    name: 'Swade Shoe',
    url: 'img/m-shoe-18.JPG',
    type: 'wears',
    price: '1500',
  },
  {
    name: 'Swade Shoe',
    url: 'img/m-shoe-19.JPG',
    type: 'wears',
    price: '1500',
  },
  {
    name: 'Swade Shoe',
    url: 'img/m-shoe-20.JPG',
    type: 'wears',
    price: '1500',
  },
  {
    name: 'Fun 203',
    url: 'furniture/f8.JPG',
    type: 'furniture',
    price: '50'
  },
  {
    name: 'Dark Gray suit',
    url: 'img/men-1.JPG',
    type: 'wears',
    price: '50'
  },
  {
    name: 'Dark Gray suit',
    url: 'img/men-2.JPG',
    type: 'wears',
    price: '50'
  },
  {
    name: 'Fun 203',
    url: 'furniture/f9.JPG',
    type: 'furniture',
    price: '50'
  },
  {
    name: 'Dark Gray suit',
    url: 'img/men-3.JPG',
    type: 'wears',
    price: '50'
  },
  {
    name: 'Dark Gray suit',
    url: 'img/n4.JPG',
    type: 'wears',
    price: '50'
  }, 
  {
    name: 'Boss 23s',
    url: 'img/w4.JPG',
    type: 'wears',
    price: '50'
  },
  {
    name: 'Boss 23s',
    url: 'img/n3.JPG',
    type: 'wears',
    price: '50'
  },
  {
    name: 'Boss 23s',
    url: 'img/s5.JPG',
    type: 'wears',
    price: '50'
  },
  {
    name: 'Fun 203',
    url: 'furniture/f2.JPG',
    type: 'furniture',
    price: '50'
  },
]



// Get DOM elements
const productsWrapperEl = document.getElementById('products-wrapper');
const checkEls = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filter-items');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cart');
const cartCount = document.getElementById('cartCount');

const bestSeller = document.querySelector('.best-seller nav');
const bestSellerImg = document.querySelector('.best-img');

bestSellerImg.addEventListener('click', bestseller)
function bestseller() {
  // alert('me');
  if (bestSeller.style.display === 'block'){
    bestSeller.style.display = 'none';
    bestSellerImg.src = 'hamburger-svgrepo-com.svg';
  } else {
    bestSeller.style.display = 'block';
    bestSellerImg.src = 'close-circle-svgrepo-com.svg';
  }
}


// const content = document.querySelector('.content');
// content.addEventListener('click', hide);
// function hide() {
//   if(outerWidth === "380px"){
//     sidebar.style.display = 'none';
//     hamburger.src = '../icon-hamburger.svg';
//   }
// }

const hamburger = document.querySelector(".hamburger img")
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener('click', display);
function display(){
  if(sidebar.style.display === 'block'){
    sidebar.style.display = 'none';
    hamburger.src = 'icon-hamburger.svg';
  } else {
    sidebar.style.display = 'block';
    hamburger.src = 'close-menu2.png';
  }
  // filter: grayscale(50) brightness(50);
}

// Initialize cart item count
let cartItemCount = 0;

// Initialize products
const productsEls = [];

// Loop over the products and create the product elements
products.forEach((product) => {
  const productEl = createProductElement(product);
  productsEls.push(productEl);
  productsWrapperEl.appendChild(productEl);
});

// Add filter event listeners
filtersContainer.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);

// Create product element
function createProductElement(product) {
  const productEl = document.createElement('div');

  productEl.className = 'item space-y-2';

  productEl.innerHTML = `<div
  class="bg-gray-200 flex justify-center cursor-pointer" style="border-radius: 0.5rem"
  >
  <img
    src="${product.url}"
    alt="${product.name}"
    class="w-full h-full object-cover"
  />
  </div>
  <p class="text-xl">${product.name}</p>
  <strong>$${product.price.toLocaleString()}</strong> <br>
  <button class="status bg-gray-900">Add to Cart</button>`;

  productEl.querySelector('.status').addEventListener('click', addToCart);

  return productEl;


  // <span
  //   class=" bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
  //   >Add To Cart</span
  // >
}

// Toggle add/remove from cart
function addToCart(e) {
  const statusEl = e.target;

  if (statusEl.classList.contains('added')) {
    // Remove from cart
    statusEl.classList.remove('added');
    statusEl.innerText = 'Add To Cart';
    statusEl.classList.remove('bg-red-600');
    statusEl.classList.add('bg-gray-900');

    cartItemCount--;
  } else {
    // Add to cart
    statusEl.classList.add('added');
    statusEl.innerText = 'Remove From Cart';
    statusEl.style.fontSize = '0.9rem';
    statusEl.classList.remove('bg-gray-900');
    statusEl.classList.add('bg-red-600');

    cartItemCount++;
  }

  // Update cart item count
  cartCount.innerText = cartItemCount.toString();
}

// Filter products by search or checkbox
function filterProducts() {
  // Get search term
  const searchTerm = searchInput.value.trim().toLowerCase();
  // Get checked categories
  const checkedCategories = Array.from(checkEls)
    .filter((check) => check.checked)
    .map((check) => check.id);

  // Loop over products and check for matches
  productsEls.forEach((productEl, index) => {
    const product = products[index];

    // Check to see if product matches the search or checked items
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
    const isInCheckedCategory =
      checkedCategories.length === 0 ||
      checkedCategories.includes(product.type);

    // Show or hide product based on matches
    if (matchesSearchTerm && isInCheckedCategory) {
      productEl.classList.remove('hidden');
    } else {
      productEl.classList.add('hidden');
    }
  });
}

// const cloths = [
//   {
//     name: 'Dark Gray suit',
//     url: '../img/men-1.JPG',
//     type: 'wears',
//     price: '50'
//   },
//   {
//     name: 'Hool Green ',
//     url: '../img/men-2.JPG',
//     type: 'wears',
//     price: '120'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-3.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-4.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-5.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-6.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-7.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-8.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-9.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-10.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     nname: 'Tuxedox Milk',
//     url: '../img/men-11.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-12.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-13.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-14.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men.15.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-16.JPG',
//     type: 'wears',
//     price: '57'
//   },
//   {
//     name: 'Tuxedox Milk',
//     url: '../img/men-17.JPG',
//     type: 'wears',
//     price: '57'
//   },
// ]

// cloths.forEach((cloth) => {
//   const clothEl = createProductElement(cloth);
//   productsEls.push(clothEl);
//   productsWrapperEl.appendChild(clothEl);
// });
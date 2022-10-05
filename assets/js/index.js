const products = document.querySelector(".products-container");
const productsCart = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const btnLoad = document.querySelector(".btn-load");
const btnBuy = document.querySelector(".btn-buy");
const barsBtn = document.querySelector(".manu-label");
const cartBtn = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

// CARRITO

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderProduct = (product) => {
  const { id, name, price, cardImg } = product;
  return `
    <div class="product">
  <img src=${cardImg} alt=${name} />
  <div class="product-info">
      <!-- top -->
      <div class="product-top">
          <h3>${name}</h3>
      </div>
      <!-- mid -->
      <div class="product-mid">
          <p>
          $${price}
          </p>
      </div>
      <!-- bot -->
      <div class="product-bot">
          <div class="product-offer">
              <button class="btn-add"
              data-id='${id}'
              data-name='${name}'
              data-price='${price}'
              data-img='${cardImg}'>Add</button>
          </div>
      </div>
  </div>
</div>`;
};

const renderProducts = (category, index) => {
  if (category === 'todas') {
    products.innerHTML += allProducts.productList[index]
    .map(renderProduct)
      .join('');
    return;
  }
  const productList = productsData.filter(p => p.category == category);
  products.innerHTML = productList.map(renderProduct).join('');
};

const changeFilterState = e => {
    const selectedCategory = e.target.dataset.category;
    const categories = [...categoriesList];
    categories.forEach(category => {
      if (category.dataset.category !== selectedCategory) {
        category.classList.remove('active');
      } else {
        category.classList.add('active');
      }
    });
    if (selectedCategory !== 'todas') {
      btnLoad.classList.add('hidden');
    } else {
      btnLoad.classList.remove('hidden');
    }
  };

const filterProducts = e => {
    if(!e.target.classList.contains('category')) return;
    changeFilterState(e);
    if(e.target.dataset.category.toLowerCase() === 'todas') {
        products.innerHTML = '';
        renderProducts('todas', 0);
    } else {
        renderProducts(e.target.dataset.category);
    }
};

const showMore = () => {
    renderProducts('todas', allProducts.next);
    allProducts.next++;
    if (allProducts.next === allProducts.limit) {
        btnLoad.classList.add('hidden');
    }
};

const renderCartProduct = (cartProduct) => {
    const {id, name, price, img, quantity} = cartProduct;
    return `
    <div class="cart-item">
    <img src="${img}" alt="" />
    <div class="item-info">
    <h3 class="item-title">${name}</h3>
    <p>$${price}</p>
    </div>
    <div class="item-handler">
    <span class="quantity-handler down" data-id=${id}>-</span>
    <span class="item-quantity">${quantity}</span>
    <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
    </div>
    `;
};

const renderCart = (cartList) => {
    if(!cartList.length){
        productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito</p>`;
        return;
    }
    productsCart.innerHTML = cartList.map(renderCartProduct).join('');
};

const addProduct = (e) => {
    if(!e.target.classList.contains('btn-add')) return;
    const product = {
        id: e.target.dataset.id,
        name: e.target.dataset.name,
        price: e.target.dataset.price,
        img: e.target.dataset.img,
    };
    
    const existingCartItem = cart.find(item => item.id === product.id);

    if(existingCartItem){
        cart = cart.map((item) => {
            return item.id === product.id
            ? { ... item, quantity: Number(item.quantity) + 1}
            : item;
        })
    } else {
        cart = [ ... cart, { ... product, quantity: 1}];
    }
    saveLocalStorage(cart);
    renderCart(cart);

};

const toggleCart = () => {
    cartMenu.classList.toggle('open-cart');
}

const init = () => {
    document.addEventListener('DOMContentLoaded', renderProducts('todas', 0));
    categories.addEventListener('click', filterProducts);
    btnLoad.addEventListener('click', showMore);
    products.addEventListener('click', addProduct);
    cartBtn.addEventListener('click', toggleCart);
};

init();

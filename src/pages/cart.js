// import { reRender } from "../utils";
// import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import Footer from "../components/footer";
import Header from "../components/header";
import Subfooter from "../components/sub-footer";



const cartPage = {
  render() {
    let cart = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    return/*html*/`

        <header id="header">
        ${Header.render()}
        </header>
     <h1>Shopping Cart</h1>

<div class="shopping-cart">

  <div class="column-labels">
    <label class="product-image">Image</label>
    <label class="product-details">Product</label>
    <label class="product-price">Price</label>
    <label class="product-quantity">Quantity</label>
    <label class="product-removal">Remove</label>
    <label class="product-line-price">Total</label>
  </div>

  <div class="product">
  ${cart.map(item => /*html*/ `
            <div class="product-image">
      <img src="${item.img}">
    </div>
    <div class="product-details">
      <div class="product-title">${item.name}">
    </div></div>
      <p class="product-description">${item.desc}">
    </div></p>
    </div>
    <div class="product-price">${item.price}">
    </div></div>
    <div class="product-quantity">${item.quantity}">
    </div></div>
    <div class="product-removal">
      <button data-id="${item.id}" class="remove-product">Delete</button>
    </div>
    <div class="product-line-price">25.98</div>
  </div>
      `).join("")}
    



  <div class="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">71.97</div>
    </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">3.60</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">15.00</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">90.57</div>
    </div>
  </div>
      
      <button class="checkout">Checkout</button>

</div>
 <footer id="footer">
        ${Footer.render()}
        </footer>

        <div class="subfooter">
        ${Subfooter.render()}
        </div>
            `
  },
  afterRender() {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-increase')) {
          increaseQuantity(id, () => reRender(cartPage, "#app"))
        } else if (btn.classList.contains('btn-decrease')) {
          decreaseQuantity(id, () => reRender(cartPage, "#app"))
        } else {
          removeItemInCart(id, () => {
            reRender(cartPage, "#app");
            toastr.success("Bạn đã xóa sản phẩm thành công");
          })
        }
      })
    })
  }
};
export default cartPage;
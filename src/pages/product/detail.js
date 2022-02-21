import { get } from "../../api/product";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Subfooter from "../../components/sub-footer";
import Subcribe from "../../components/subcribe";

// import { addToCart } from '../../utils/cart';
// import toastr from "toastr";


const DetailProduct = {
  async render(id) {
    const { data: products } = await get(id)
    return/*html*/`
         <header id="header">
        ${Header.render()}
        </header>
         <!-- Single Starts Here -->
    <div class="single-product">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Detail Product</h1>
            </div>
          </div>
          <div class="col-md-6">
            <div class="product-slider">
              <div id="slider" class="flexslider">
                <ul class="slides">
                  <li>
                    <img src="${products.img}" />
                  </li>
                  <!-- items mirrored twice, total of 12 -->
                </ul>
              </div>
              <div id="carousel" class="flexslider">
            
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="right-content">
              <h4>${products.name}</h4>
              <h6>${products.price}</h6>
              <p>${products.desc}</p>
              <span>7 left on stock</span>
              <form action="" method="get">
                <label for="quantity">Quantity :</label>
                <input name="quantity" type="quantity" id="inputValue" class="quantity-text">
               <button  data-id="${products.id}" id="btnAddTocart">Add To Card</button>
              </form>
              <div class="down-content">
                <div class="categories">
                  <h6>Category: <span><a href="#">Pants</a>,<a href="#">Women</a>,<a href="#">Lifestyle</a></span></h6>
                </div>
                <div class="share">
                  <h6>Share: <span><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-twitter"></i></a></span></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Single Page Ends Here -->


    <!-- Similar Starts Here -->
    <div class="featured-items">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>You May Also Like</h1>
            </div>
          </div>
          <div class="col-md-12">
            <div class="owl-carousel owl-theme">
              <a href="/#/product/${products.id}">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 1">
                  <h4>${products.name}</h4>
                  <h6>${products.price}</h6>
                </div>
              </a>
              <a href="/#/product/${products.id}">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 2">
                  <h4>${products.name}</h4>
                  <h6>${products.price}</h6>
                </div>
              </a>
              <a href="#product/detail">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 3">
                  <h4>${products.name}</h4>
                  <h6>${products.price}</h6>
                </div>
              </a>
              <a href="#product/detail">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 4">
                  <h4>${products.name}</h4>
                  <h6>${products.price}</h6>
                </div>
              </a>
              <a href="#product/detail">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 5">
                  <h4>${products.name}</h4>
                  <h6>${products.price}</h6>
                </div>
              </a>
              <a href="#product/detail">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 6">
                  <h4>${products.name}</h4>
                  <h6>${products.price}</h6>
                </div>
              </a>
              <a href="#product/detail">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 7">
                  <h4>${products.name}</h4>
                  <h6>${products.price}</h6>
                </div>
              </a>
              <a href="#product/detail">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 8">
                  <h4>${products.name}</h4>
                  <h6>${products.price}</h6>
                </div>
              </a>
              <a href="#product/detail">
                <div class="featured-item">
                  <img src="${products.img}" alt="Item 9">
                  <h4>${products.name}</h4>
                  <h6>$${products.price}</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Similar Ends Here -->

    <div class="subcribe">
        ${Subcribe.render()}
        </div>        
         
        <footer id="footer">
        ${Footer.render()}
        </footer>

        <div class="subfooter">
        ${Subfooter.render()}
        </div>

        `
  },


};
export default DetailProduct;
import { get } from "../../api/product";
import Header from "../../components/header";
import Footer from "../../components/footer";
import similarDetail from "../../components/similar-detail";


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
              <div>
                    <img style="width:500px;height:370px;center;" src="${products.img}" />
              
                  <!-- items mirrored twice, total of 12 -->
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
                <input type="quantity" class="quantity-text">
               <button id="btnAddTocart">Add To Card</button>
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
      <div style="display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))" >
      ${await similarDetail.render()}
      </div>     

        <footer id="footer">
        ${Footer.render()}
        </footer>
     
        `
  },


};
export default DetailProduct;
import { getAll } from "../../api/product";
import Footer from "../../components/footer";
import Header from "../../components/header";


const ProductsPage = {
  async render() {
    const response = await getAll();
    return/*html*/`
        <header id="header">
        ${Header.render()}
        </header>
          <!-- Items Starts Here -->
        
    <div class="featured-page">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Featured Items</h1>
            </div>
          </div>
          <div class="col-md-8 col-sm-12">
            <div id="filters" class="button-group">
              <button class="btn btn-primary" data-filter="*">All Products</button>
              <button class="btn btn-primary" data-filter=".new">Newest</button>
              <button class="btn btn-primary" data-filter=".low">Low Price</button>
              <button class="btn btn-primary" data-filter=".high">Hight Price</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    <div class="featured container no-gutter">
    
        <div class="row posts">
         ${response.data.map((products) => `
            <div id="1" class="item new col-md-4">
              <a href="/#/products/${products.id}">
                <div class="featured-item">
                  <img src="${products.img}" alt="">
                  <h4>${products.name}</h4>
                  <h6>${products.desc}</h6>
                </div>
              </a>        
            </div>
            `).join("")}
           
           

    <div class="page-navigation">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul>
              <li class="current-page"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Featred Page Ends Here -->

             
         
        <footer id="footer">
        ${Footer.render()}
        </footer>

        `
  }
};
export default ProductsPage;
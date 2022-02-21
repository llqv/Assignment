import { getAll } from "../api/product";

const Featured = {
  async render() {
    const response = await getAll();
    return/*html*/`
        <!-- Similar Starts Here -->
    <div class="featured-items">
      <div class="container">
        <div>
          <div class="col-md-12">
            <div class="section-heading">
              <div class="line-dec"></div>
              <h1>Featred Product</h1>
            </div>
          </div>
          <div  style="display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">
           ${response.data.map((products) => /*html*/`
            <div>
             <a href="/#/products/${products.id}">
                <div class="featured-item">
                  <img src="${products.img}" alt="">
                  <h4>${products.name}</h4>
                  <h6>${products.desc}</h6>
                </div>
              </a>     
            </div>
         `).join("")}

          
          </div>
        </div>
      </div>
    </div>
    <!-- Similar Ends Here -->
        `
  },

};
export default Featured;
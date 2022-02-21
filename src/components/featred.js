import axios from "axios";

const Featred = {
  async render() {
    const { data } = await axios.get("http://localhost:3001/products");
    console.log(data)
    return /*html*/`
<!-- Featured Starts Here -->
  <div class="featured-items">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h1>Featured Items</h1>
          </div>
        </div>
        <div class="col-md-12">
        ${data.map((products) => `
          <div class="owl-carousel owl-theme">
            <a href="/#/products/${products.id}">
              <div class="featured-item">
                <img src="${products.img}">
                <h4>${products.name}</h4>
                <h6>${products.price}</h6>
              </div>
           `).join("")}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Featred Ends Here -->

    `}
};
export default Featred;





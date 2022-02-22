import navAd from "../../../components/admin/navAd";
import axios from "axios";
import { get, update } from "../../../api/product"

const adminEditPost = {
    async render(id) {
        const { data } = await get(id);
        return/*html*/`
           <form id="form-edit" style="margin-top:100px" class="container">
        <div class="form-row">
        ${navAd.render()}
            <div class="form-group col-md-6">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" id="name-product" placeholder="">
            </div>
        </div>
        <div class="form-group">
            <label for="exampleFormControlFile1">Image</label>
            <input type="file" class="form-control-file" id="img-product">
        </div>
        <div class="form-group">
            <label for="">Description</label>
            <input type="text" class="form-control" id="desc-product" placeholder="">
        </div>
      <div class="form-group">
                <label for="">Quantity</label>
                <input type="" class="form-control" id="quantity-product" placeholder="">
            </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputState">Categories</label>
                <select id="categories-product" id="inputState" class="form-control">
                <option>...</option>
                    <option selected>Pants</option>
                    <option selected>Tee</option>
                    
                </select>
            </div>
            <div class="form-group">
                <label for="">Price</label>
                <input type="" class="form-control" id="price-product" placeholder="">
            </div>
           
        </div>  
          <button type="submit" class="btn btn-primary">Renew Product</button>
    </form>
        `
    }
};
export default adminEditPost;
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
                <label for="inputEmail4">ID</label>
                <input value="${data.id}" type="text" disabled class="form-control" id="id-product" placeholder="">
            </div>
        </div>
            <div class="form-group">
                <label for="inputEmail4">Name</label>
                <input value="${data.name}" type="text" class="form-control" id="name-product" placeholder="">
            </div>
        </div>
        <div class="form-group">
            <label for="exampleFormControlFile1">Image</label>
            <input value="${data.img}" type="file" class="form-control-file" id="img-product">
        </div>
        <div class="form-group">
            <label for="">Description</label>
            <input value="${data.description}" type="text" class="form-control" id="desc-product" placeholder="">
        </div>
      <div class="form-group">
                <label for="">Quantity</label>
                <input value="${data.quantity}" type="" class="form-control" id="quantity-product" placeholder="">
            </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputState">Categories</label>
                <select value="${data.categories}" id="categories-product" id="inputState" class="form-control">
                <option>...</option>
                    <option selected>Pants</option>
                    <option selected>Tee</option>
                    
                </select>
            </div>
            <div class="form-group">
                <label for="">Price</label>
                <input value="${data.price}" type="" class="form-control" id="price-product" placeholder="">
            </div>
           
        </div>  
          <button type="submit" class="btn btn-primary">Update Product</button>
    </form>
        `
    },
    afterRender(id) {
        const formAdd = document.querySelector("#form-edit");
        const imgPost = document.querySelector("#img-product");
        let imgLink = "";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/local12/image/upload";
        const CLOUDINARY_PRESET = "ytxcvjqq";


        formAdd.addEventListener("submit", async function (e) {
            e.preventDefault();
            const file = imgPost.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                imgLink = data.url
            }


            // call api thêm bài viết
            update({
                id: document.querySelector("#id-product").value,
                name: document.querySelector("#name-product").value,
                img: imgLink || "",
                desc: document.querySelector("#desc-product").value,
                quantity: document.querySelector("#quantity-product").value,
                categories: document.querySelector("#categories-product").value,
                price: document.querySelector("#price-product").value,
            });
            window.location.href = "/#/admin/dashboard";


        });
    },
};
export default adminEditPost;
import axios from "axios";
import { add } from "../../../api/product";
import navAd from "../../../components/admin/navAd";

const adminAddPost = {
    async render() {
        return/*html*/`
         <form id="form-add" style="margin-top:100px" class="container">
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
          <button type="submit" class="btn btn-primary">Add Product</button>
    </form>
        `
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
        const imgProduct = document.querySelector("#img-product");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/local12/image/upload";
        const CLOUDINARY_PRESET = "ytxcvjqq";
        let imgLink = "";

        // Submit form
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = document.querySelector("#img-product").files[0];
            if (file) {
                // tạo object và gắn giá trị vào các thuộc tính của formData
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                // call API cloudinary để đẩy ảnh lên
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }

            // call api thêm bài viết
            add({
                name: document.querySelector("#name-product").value,
                //  Nếu imgLink có giá trị thì sẽ lấy giá trị của imgLink ngược lại thì rỗng
                img: imgLink || "",
                desc: document.querySelector("#desc-product").value,
                quantity: document.querySelector("#quantity-product").value,
                categories: document.querySelector("#categories-product").value,
                price: document.querySelector("#price-product").value,
            });
            window.location.href = "/#/admin/dashboard";

            reRender(AdminNewsPage, "#app");
        });
    },
};
export default adminAddPost;
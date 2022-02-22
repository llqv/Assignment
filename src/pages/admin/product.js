import adminProductList from "../../components/admin/product";
import adminEditPost from "./news/edit";

const adminProductPage = {
    render() {
        return/*html*/`
        <div>
        ${adminProductList.render()}
        </div>
        `
    },
    afterRender() {
        adminEditPost.render();
    }
};
export default adminProductPage;
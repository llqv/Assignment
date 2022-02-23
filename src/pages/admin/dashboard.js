import navAd from "../../components/admin/navAd";
import adminProductList from "../../components/admin/product";
import adminAddPost from "./news/add";
import adminEditPost from "./news/edit";

const DashboardPage = {
    async render() {
        return/*html*/`
        <div>
        ${navAd.render()}
        </div>

        <div>
        ${await adminProductList.render()}
        </div>

        `
    },
    afterRender() {
        adminProductList.afterRender();
        adminEditPost.render();
        adminAddPost.render();
    },
};
export default DashboardPage;
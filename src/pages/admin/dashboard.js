import navAd from "../../components/admin/navAd";
import adminProductList from "../../components/admin/product";

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
    },
};
export default DashboardPage;
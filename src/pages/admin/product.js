import adminProductList from "../../components/admin/product";

const adminProductPage = {
    render() {
        return/*html*/`
        <div>
        ${adminProductList.render()}
        </div>
        `
    }
};
export default adminProductPage;
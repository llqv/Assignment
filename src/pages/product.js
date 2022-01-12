import News from "../components/news";

const ProductPage = {
    render() {
        return `
        <div class="new">
           ${News.render()}
        </div>
        `;
    },
};
export default ProductPage;

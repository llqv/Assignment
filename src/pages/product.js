import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

const ProductPage = {
    render() {
        return `
        <header id="header">
        ${Header.render()}
        </header>
        <div class="new">
           ${News.render()}
        </div>
        <header id="footer">
        ${Footer.render()}
        </header>
        `;
    },
};
export default ProductPage;

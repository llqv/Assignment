import Banner from "../components/banner";
import Featred from "../components/featred";
import Header from "../components/header";

const HomePage = {
    async render() {
        return /*html*/ `

        <header id="header">
        ${Header.render()}
        </header>

        <div class="banner">
        ${Banner.render()}
        </div>   

        <div class="featred">
        ${await Featred.render()}
        </div>         
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;
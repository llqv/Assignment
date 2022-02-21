import Banner from "../components/banner";
import Featred from "../components/featred";
import Footer from "../components/footer";
import Header from "../components/header";
import Subfooter from "../components/sub-footer";
import Subcribe from "../components/subcribe";


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

        <div class="subcribe">
        ${Subcribe.render()}
        </div>        
         
        <footer id="footer">
        ${Footer.render()}
        </footer>

        <div class="subfooter">
        ${Subfooter.render()}
        </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;
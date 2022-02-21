import Abouts from "../components/abouts";
import Footer from "../components/footer";
import Header from "../components/header";
import Subfooter from "../components/sub-footer";
import Subcribe from "../components/subcribe";

const AboutPage = {
    render() {
        return/*html*/`
        
        <header id="header">
        ${Header.render()}
        </header>

        <div class="about">
        ${Abouts.render()}
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
        `
    },
    afterRender() {
        Abouts.afterRender();
    },
};
export default AboutPage;
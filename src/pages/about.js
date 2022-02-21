import Abouts from "../components/abouts";
import Footer from "../components/footer";
import Header from "../components/header";


const AboutPage = {
    render() {
        return/*html*/`
        
        <header id="header">
        ${Header.render()}
        </header>

        <div class="about">
        ${Abouts.render()}
        </div>  
        
        <footer id="footer">
        ${Footer.render()}
        </footer>

        `
    },
    afterRender() {
        Abouts.afterRender();
    },
};
export default AboutPage;
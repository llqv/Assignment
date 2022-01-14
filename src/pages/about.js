import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */ `
        <header id="header">
        ${Header.render()}
        </header>
        <div>About Page</div>
        <header id="footer">
        ${Footer.render()}
        </header>
        `;
    },
};
export default AboutPage;

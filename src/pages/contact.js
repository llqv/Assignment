import Contacts from "../components/contacts";
import Footer from "../components/footer";
import Header from "../components/header";
import Subfooter from "../components/sub-footer";
import Subcribe from "../components/subcribe";

const ContactPage = {
    render() {
        return/*html*/`

        <header id="header">
        ${Header.render()}
        </header>

        <div class="contact">
        ${Contacts.render()}
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
        Contacts.afterRender();
    },
};
export default ContactPage;
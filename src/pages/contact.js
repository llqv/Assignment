import Contacts from "../components/contacts";
import Footer from "../components/footer";
import Header from "../components/header";

const ContactPage = {
    render() {
        return/*html*/`

        <header id="header">
        ${Header.render()}
        </header>

        <div class="contact">
        ${Contacts.render()}
        </div>
    
        <footer id="footer">
        ${Footer.render()}
        </footer>

      
        `
    },
    afterRender() {
        Contacts.afterRender();
    },
};
export default ContactPage;
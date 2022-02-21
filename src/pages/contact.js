import Contacts from "../components/contacts";

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
    
     

      
        `
    },
    afterRender() {
        Contacts.afterRender();
    },
};
export default ContactPage;
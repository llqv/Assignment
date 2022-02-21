import Abouts from "../components/abouts";

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

     
         
      
        `
    },
    afterRender() {
        Abouts.afterRender();
    },
};
export default AboutPage;
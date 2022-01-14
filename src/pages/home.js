import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

const HomePage = {
    render() {
        return /* html */` 
        <div class="max-w-5xl mx-auto" >
        <header id="header">
        ${Header.render()}
        </header>
        <div class="banner">
           ${Banner.render()}
        </div>
        <div class="news">
           ${News.render()}
        </div>
        <header id="footer">
        ${Footer.render()}
        </header>
    </div>
  
       
      `;
    },
};
export default HomePage;

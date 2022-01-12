import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import AdminProductPage from "./pages/admin/product";
import AdminProductEdit from "./pages/admin/productEdit";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/product": () => {
        print(AdminProductPage.render());
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
});

router.resolve();

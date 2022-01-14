import Navigo from "navigo";
import AboutPage from "./pages/about";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import AdminProductPage from "./pages/admin/product";
import AdminProductEdit from "./pages/admin/productEdit";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import AdminNewAdd from "./pages/admin/news/add";
import DashboardPage from "./pages/dashboard";
import AdminNews from "./pages/admin/news";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
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
    "/admin/dashboard": () => {
        print(DashboardPage.render());
    },
    "/admin/news": () => {
        print(AdminNews.render());
    },
    "/admin/product": () => {
        print(AdminProductPage.render());
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
    "/admin/news/add": () => {
        print(AdminNewAdd.render());
    },
});

router.resolve();

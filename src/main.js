import Navigo from "navigo";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/admin/dashboard";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import ProductsPage from "./pages/product";
import DetailProduct from "./pages/product/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import cartPage from "./pages/cart";
import adminAddPost from "./pages/admin/news/add";
import adminEditPost from "./pages/admin/news/edit";




const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.querySelector("#app").innerHTML = await content.render(id);
  if (content.afterRender) await content.afterRender();
};

router.on("/admin/*", () => { }, {
  before: (done) => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    // nếu userId === 1 thì tôi mới render
    if (userId === 1) {
      done();
    } else {
      // ngược thì lại redirect về trang chủ
      document.location.href = "/";
    }
  },
});

router.on({
  "/": () => print(HomePage),
  "/product/index": () => print(ProductsPage),
  "/products/:id": ({ data }) => print(DetailProduct, data.id),
  "/about": () => print(AboutPage),
  "/cart": () => print(cartPage),
  "/contact": () => print(ContactPage),
  "/signin": () => print(Signin),
  "/signup": () => print(Signup),
  "/admin/dashboard": () => print(DashboardPage),
  "/admin/news/index": () => print(adminAddPost),
  "/admin/news/:id/edit": ({ data }) => print(adminEditPost, data.id)
});
router.resolve();


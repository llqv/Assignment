import { signin } from "../api/user";
import Header from "../components/header";
import Footer from "../components/footer";



const Signin = {
  render() {
    return/*html*/`

        <header id="header">
        ${Header.render()}
        </header>

    <div id="formSignin" class="main_div">
    <div class="title">Login Form</div>
    <div class="social_icons">
      <a href="#"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
      <a href="#"><i class="fab fa-twitter"></i><span>Twitter</span></a>
    </div>
    <form action="#">
      <div class="input_box">
        <input type="text" placeholder="Email or Phone" id="email" required>
        <div class="icon"><i class="fas fa-user"></i></div>
      </div>
      <div class="input_box">
        <input type="password" placeholder="Password" id="password" required>
        <div class="icon"><i class="fas fa-lock"></i></div>
      </div>
      <div class="option_div">
        <div class="check_box">
          <input type="checkbox">
          <span>Remember me</span>
        </div>
        <div class="forget_div">
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div class="input_box button">
        <input type="submit" value="Login">
      </div>
      <div class="sign_up">
        Not a member? <a href="#signup">Signup now</a>
      </div>
    </form>
  </div>
     

       <footer id="footer">
        ${Footer.render()}
        </footer>

        `;
  },
  afterRender() {
    const formSignin = document.querySelector("#formSignin");
    formSignin.addEventListener("submit", async (e) => {
      e.preventDefault();
      // call API login
      const { data } = await signin({
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      });
      // lưu dữ liệu vào localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      // kiểm tra quyền dựa trên ID
      if (data.user.id === 1) {
        document.location.href = "/#/admin/dashboard";
      } else {
        document.location.href = "/#/";
      }
    });
  },
};
export default Signin;
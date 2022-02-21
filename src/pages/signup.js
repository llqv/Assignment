import Header from "../components/header";
import Footer from "../components/footer";
import { signup } from "../api/user";

const Signup = {
  render() {
    return /*html*/ `

        <header id="header">
        ${Header.render()}
        </header>
        
         <div id="formSignup" class="main_div">
    <div class="title">Sign Up</div>
    <div class="social_icons">
      <a href="#"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
      <a href="#"><i class="fab fa-twitter"></i><span>Twitter</span></a>
    </div>
    <form action="#">
      <div class="input_box">
        <input type="text" placeholder="Username" id="username" required>
        <div class="icon"><i class="fas fa-user"></i></div>
      </div>
      <div class="input_box">
        <input type="email" placeholder="Email" id="email" required>
        <div class="icon"><i class="fas fa-lock"></i></div>
      </div>
      <div class="input_box">
        <input type="password" placeholder="Password" id="password" required>
        <div class="icon"><i class="fas fa-lock"></i></div>
      </div>

      <div class="input_box button">
        <input type="submit" value="Register">
      </div>
      <div class="sign_up">
        Haved account? <a href="#signin">Sign In</a>
      </div>
    </form>
  </div>
   

       <footer id="footer">
        ${Footer.render()}
        </footer>

        
        `
  },
  afterRender() {
    const formSignup = document.querySelector('#formSignup');
    formSignup.addEventListener('submit', function (e) {
      e.preventDefault();
      signup({
        username: document.querySelector('#username').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
      })
    });
  },
};
export default Signup;
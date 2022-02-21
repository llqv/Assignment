const Header = {
  render() {
    return/*html*/`
        <!-- Navigation -->
  <nav style="border-bottom:1px solid #ebe1e1 " class="navbar navbar-expand-lg navbar-dark bg-white static-top">

    <div class="container">
      <a class="navbar-brand" href="#"><img src="./src/assets/images/header-logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#product/index">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#signin">Sign In</a>
          </li>
          <li class="nav-item">
            <a style="margin-top:-10px;margin-right:-100px;padding-right:-120px" class="nav-link" href="#cart"><img src="https://img.icons8.com/ios/28/000000/shopping-bag--v1.png"/></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        `
  },
};
export default Header;
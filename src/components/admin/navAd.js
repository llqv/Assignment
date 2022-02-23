const navAd = {
  render() {
    return/*html*/`
      <section>
  <header>
    <nav class="rad-navigation">
      <div class="rad-logo-container">
      
        <a href="#" class="rad-logo">Ash-Board</a>
      </div>
     
    </nav>
  </header>
</section>
<aside>
  <nav class="rad-sidebar">
    <ul style="list-style:none">
      <li>
        <a href="/#/admin/dashboard" class="inbox">
          <i></span></i>
          <span class="rad-sidebar-item">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="/admin/news/index">
          <i>   
          </i>
          <span class="rad-sidebar-item">Add Product</span>
        </a>
      </li>
      <li><a href="#" class="snooz"><i></i><span class="rad-sidebar-item">Call trends</span></a></li>
      <li><a href="#" class="done"><i></span></i><span class="rad-sidebar-item">Heat maps</span></a></li>
      <li><a href="#"><i></i><span class="rad-sidebar-item">Settings</span></a></li>
    </ul>
  </nav>
</aside>
        `
  },
};
export default navAd;
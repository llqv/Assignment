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
          <i class="fa fa-dashboard"></span></i>
          <span class="rad-sidebar-item">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-bar-chart-o">
           
          </i>
          <span class="rad-sidebar-item">Ticket status</span>
        </a>
      </li>
      <li><a href="#" class="snooz"><i class="fa fa-line-chart"></i><span class="rad-sidebar-item">Call trends</span></a></li>
      <li><a href="#" class="done"><i class="fa fa-area-chart"></span></i><span class="rad-sidebar-item">Heat maps</span></a></li>
      <li><a href="#"><i class="fa fa-wrench"></i><span class="rad-sidebar-item">Settings</span></a></li>
    </ul>
  </nav>
</aside>
        `
  },
};
export default navAd;
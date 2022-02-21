const navAd = {
      render() {
            return/*html*/`
      <section>
  <header>
    <nav class="rad-navigation">
      <div class="rad-logo-container">
        <a href="#" class="rad-logo">Ash-Board</a>
        <a href="#" class="rad-toggle-btn pull-right"><i class="fa fa-bars"></i></a>
      </div>
      <div class="rad-top-nav-container">
        <ul class="links">
          <li>
            <a class="rad-menu-item" href="#"><i class="fa fa-comment-o"></i></a>
          </li>
          <li class="rad-dropdown"><a class="rad-menu-item" href="#"><i class="fa fa-envelope-o"><span class="rad-menu-badge">3</span></i></a>
            <ul class="rad-dropmenu-item">
              <li class="rad-dropmenu-header"><a href="#">Your Notifications</a></li>
              <li class="rad-notification-item">
                <a class="rad-notification-content" href="#">

                </a>
              </li>
              <li class="rad-dropmenu-footer"><a href="#">See all notifications</a></li>
            </ul>
          </li>
          <li class="rad-dropdown"><a class="rad-menu-item" href="#"><i class="fa fa-bell-o"><span class="rad-menu-badge">49</span></i></a>
            <ul class="rad-dropmenu-item">
              <li class="rad-dropmenu-header"><a href="#">Your Alerts</a></li>
              <li class="rad-notification-item">
                <a class="rad-notification-content" href="#">

                </a>
              </li>
              <li class="rad-dropmenu-footer"><a href="#">See all alerts</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</section>
<aside>
  <nav class="rad-sidebar">
    <ul style="list-style:none">
      <li>
        <a href="#" class="inbox">
          <i class="fa fa-dashboard"><span class="icon-bg rad-bg-success"></span></i>
          <span class="rad-sidebar-item">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-bar-chart-o">
            <span class="icon-bg rad-bg-danger"></span>
          </i>
          <span class="rad-sidebar-item">Ticket status</span>
        </a>
      </li>
      <li><a href="#" class="snooz"><i class="fa fa-line-chart"><span class="icon-bg rad-bg-primary"></span></i><span class="rad-sidebar-item">Call trends</span></a></li>
      <li><a href="#" class="done"><i class="fa fa-area-chart"><span class="icon-bg rad-bg-warning"></span></i><span class="rad-sidebar-item">Heat maps</span></a></li>
      <li><a href="#"><i class="fa fa-wrench"><span class="icon-bg rad-bg-violet"></span></i><span class="rad-sidebar-item">Settings</span></a></li>
    </ul>
  </nav>
</aside>
        `
      },
};
export default navAd;
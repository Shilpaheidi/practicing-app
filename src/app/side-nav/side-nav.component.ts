import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @ViewChild('drawer') drawer?: MatSidenav;

  isMobile = false;

  primaryItems = [
    { label: 'Dashboard', icon: 'dashboard', colorClass: 'primary-blue', selected: true },
    { label: 'RTL', icon: 'swap_horiz', colorClass: 'primary-orange' },
    { label: 'Widgets', icon: 'widgets', colorClass: 'primary-red' },
    { label: 'Basic UI Elements', icon: 'view_quilt', colorClass: 'primary-blue' },
    { label: 'Advanced Elements', icon: 'build', colorClass: 'primary-green' },
    { label: 'Form Elements', icon: 'article', colorClass: 'primary-violet' },
    { label: 'Tables', icon: 'table_chart', colorClass: 'primary-yellow' },
    { label: 'Editors', icon: 'edit', colorClass: 'primary-red' },
    { label: 'Charts', icon: 'bar_chart', colorClass: 'primary-blue' },
    { label: 'Maps', icon: 'map', colorClass: 'primary-green' },
    { label: 'Notifications', icon: 'notifications', colorClass: 'primary-blue' },
    { label: 'Icons', icon: 'emoji_objects', colorClass: 'primary-orange' }
  ];

  secondaryItems = [
    { label: 'Popups', icon: 'open_in_new', colorClass: 'primary-green' },
    { label: 'User Pages', icon: 'people', colorClass: 'primary-blue' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  closeSidenavOnMobile(): void {
    if (this.isMobile) {
      this.drawer?.close();
    }
  }
}

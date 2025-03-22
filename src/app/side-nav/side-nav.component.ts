import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  isMobile = false; // Tracks whether the device is mobile
  opened = true; // Sidebar state

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((state: BreakpointState) => {
      this.isMobile = state.matches;
      this.opened = !this.isMobile; // Close sidebar on mobile, open on desktop
    });
  }
}

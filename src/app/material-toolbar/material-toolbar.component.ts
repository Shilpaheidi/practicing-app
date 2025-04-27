import { Component } from '@angular/core';

@Component({
  selector: 'app-material-toolbar',
  templateUrl: './material-toolbar.component.html',
  styleUrls: ['./material-toolbar.component.scss']
})
export class MaterialToolbarComponent {
  showMobileMenu = false;
  isMobileMenuOpen = false;
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

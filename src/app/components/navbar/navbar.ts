import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  notificationCount = 3;
  activeLink = 'home';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateActiveLink();
  }

  updateActiveLink(): void {
    const url = this.router.url;
    if (url.includes('home')) this.activeLink = 'home';
    else if (url.includes('products')) this.activeLink = 'products';
    else if (url.includes('about')) this.activeLink = 'about';
    else if (url.includes('contact')) this.activeLink = 'contact';
  }

  navigateTo(link: string): void {
    this.activeLink = link;
    this.router.navigate([`/${link}`]);
  }

  onNotificationClick(): void {
    alert('📬 You have ' + this.notificationCount + ' new messages from our sales team!');
  }
}

import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy {
  notificationCount = 3;
  activeLink = 'home';
  private destroy$ = new Subject<void>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateActiveLink();

    // Listen to route changes
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updateActiveLink();
      });
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

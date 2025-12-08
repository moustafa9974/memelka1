import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [CommonModule, NavbarComponent]
})
export class AboutComponent {
  highlights = [
    {
      icon: '✓',
      title: 'Quality Assured',
      description: 'Every product meets strict international standards'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Serving customers across 50+ countries worldwide'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Efficient logistics and swift shipping guaranteed'
    },
    {
      icon: '💎',
      title: 'Best Prices',
      description: 'Competitive pricing without compromising quality'
    }
  ];
}

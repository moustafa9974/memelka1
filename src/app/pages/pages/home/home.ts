import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  NgZone,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  badge: string;
  image?: string;
}

interface ProductCategory {
  categoryName: string;
  categoryIcon: string;
  products: Product[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule, NavbarComponent],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroImageContainer') heroImageContainer!: ElementRef;
  @ViewChild('heroContent') heroContent!: ElementRef;
  @ViewChild('categoriesSection') categoriesSection!: ElementRef;

  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);

  productCategories: ProductCategory[] = [
    {
      categoryName: 'Dates & Varieties',
      categoryIcon: '🌴',
      products: [
        {
          id: 'date-1',
          name: 'Medjool Dates',
          description: 'Rich, buttery texture with caramel notes. Perfect for natural sweetness and nutrition.',
          icon: '🌴',
          category: 'Dates',
          badge: 'Premium',
          image: 'Medjool Dates Punnet 450g.jpeg'
        },
        {
          id: 'date-2',
          name: 'Rotab Dates',
          description: 'Soft, fresh variety with delicate sweetness. Best fresh or with coffee.',
          icon: '📍',
          category: 'Dates',
          badge: 'Fresh',
          image: 'Rotab.jpeg'
        },
        {
          id: 'date-3',
          name: 'Soukary Dates',
          description: 'Premium dried variety with intense flavor profile. Extended shelf life.',
          icon: '🏆',
          category: 'Dates',
          badge: 'Dried',
          image: 'Soukary.jpeg'
        }
      ]
    },
    {
      categoryName: 'Herbs & Spices',
      categoryIcon: '🌿',
      products: [
        {
          id: 'spice-1',
          name: 'Anise Seeds',
          description: 'Aromatic seeds with licorice flavor. Used in cooking & traditional beverages.',
          icon: '⭐',
          category: 'Spices',
          badge: 'Spice',
          image: 'Anise.jpeg'
        },
        {
          id: 'spice-2',
          name: 'Black Pepper',
          description: 'Premium quality with sharp, pungent flavor. Essential for every kitchen.',
          icon: '🖤',
          category: 'Spices',
          badge: 'Spice',
          image: 'Blackpepper.jpeg'
        },
        {
          id: 'spice-3',
          name: 'Cumin Seeds',
          description: 'Earthy, warm spice. Essential in Indian, Middle Eastern & Mexican cuisine.',
          icon: '🌾',
          category: 'Spices',
          badge: 'Spice',
          image: 'Cumin.jpeg'
        },
        {
          id: 'spice-4',
          name: 'Chili Powder',
          description: 'Bold, spicy kick. Adds heat and depth to any dish.',
          icon: '🌶️',
          category: 'Spices',
          badge: 'Spice',
          image: 'Chilli.jpeg'
        },
        {
          id: 'spice-5',
          name: 'Garlic Powder',
          description: 'Concentrated garlic flavor for convenience. No prep required.',
          icon: '🧄',
          category: 'Spices',
          badge: 'Powder',
          image: 'garlic powder.jpeg'
        },
        {
          id: 'spice-6',
          name: 'Onion Powder',
          description: 'Sweet, savory powder. Great for seasonings and dry rubs.',
          icon: '🧅',
          category: 'Spices',
          badge: 'Powder',
          image: 'Onion_powder.jpeg'
        },
        {
          id: 'spice-7',
          name: 'Coriander Seeds',
          description: 'Citrusy, warm aroma. Used in curries and marinades.',
          icon: '🌱',
          category: 'Spices',
          badge: 'Spice',
          image: 'Coriander.jpeg'
        },
        {
          id: 'spice-8',
          name: 'Sesame Seeds',
          description: 'Golden seeds with nutty flavor. Versatile for cooking & garnishing.',
          icon: '✨',
          category: 'Spices',
          badge: 'Seed',
          image: 'Sesame.jpeg'
        }
      ]
    },
    {
      categoryName: 'Beans & Pulses',
      categoryIcon: '🫘',
      products: [
        {
          id: 'bean-1',
          name: 'White Beans',
          description: 'Creamy texture, mild flavor. Perfect for soups and stews.',
          icon: '⚪',
          category: 'Legumes',
          badge: 'Legume',
          image: 'WhiteBean.jpeg'
        },
        {
          id: 'bean-2',
          name: 'Lupine Lentils',
          description: 'High protein, earthy flavor. Excellent nutritional profile.',
          icon: '💛',
          category: 'Legumes',
          badge: 'Legume',
          image: 'Lupin.jpeg'
        },
        {
          id: 'bean-3',
          name: 'Chickpeas',
          description: 'Versatile legume for hummus, curries & salads. High in fiber.',
          icon: '🟤',
          category: 'Legumes',
          badge: 'Legume',
          image: 'Chickpea.jpeg'
        }
      ]
    },
    {
      categoryName: 'Fresh Produce',
      categoryIcon: '🥬',
      products: [
        {
          id: 'fresh-1',
          name: 'Onions',
          description: 'Fresh, crisp onions. Essential ingredient for every kitchen.',
          icon: '🧅',
          category: 'Fresh',
          badge: 'Fresh',
          image: 'Onion.jpeg'
        },
        {
          id: 'fresh-2',
          name: 'Garlic',
          description: 'Premium fresh garlic with robust flavor for cooking.',
          icon: '🧄',
          category: 'Fresh',
          badge: 'Fresh',
          image: 'Garlic.jpeg'
        },
        {
          id: 'fresh-3',
          name: 'Potatoes',
          description: 'Quality potatoes for all culinary needs. Long shelf life.',
          icon: '🥔',
          category: 'Fresh',
          badge: 'Fresh',
          image: 'Yellow_potato.jpeg'
        }
      ]
    },
    {
      categoryName: 'Industrial Materials',
      categoryIcon: '⚙️',
      products: [
        {
          id: 'industrial-1',
          name: 'Coal',
          description: 'Premium quality coal for industrial and commercial use.',
          icon: '🖤',
          category: 'Industrial',
          badge: 'Industrial',
          image: 'coal.jpeg'
        },
        {
          id: 'industrial-2',
          name: 'Urea',
          description: 'Nitrogen-rich fertilizer for agricultural applications.',
          icon: '🧂',
          category: 'Industrial',
          badge: 'Fertilizer',
          image: 'Urea.jpeg'
        },
        {
          id: 'industrial-3',
          name: 'Fertilizers',
          description: 'Complete range of fertilizers for all crop types.',
          icon: '🌾',
          category: 'Industrial',
          badge: 'Fertilizer',
          image: 'Pile of soil.jpeg'
        }
      ]
    },
    {
      categoryName: 'Dairy Products',
      categoryIcon: '🧀',
      products: [
        {
          id: 'dairy-1',
          name: 'Roumi Cheese',
          description: 'Traditional cheese with rich, complex flavor. Perfect for tables and cooking.',
          icon: '🧀',
          category: 'Dairy',
          badge: 'Cheese',
          image: 'download (4).jpeg'
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization if needed
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.ngZone.runOutsideAngular(() => {
      this.initGsapAnimations();
    });
  }

  private initGsapAnimations(): void {
    // Hero image zoom effect on scroll (like video)
    if (this.heroImageContainer) {
      gsap.to(this.heroImageContainer.nativeElement, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: this.heroImageContainer.nativeElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      // Zoom effect on image itself
      const heroImg = this.heroImageContainer.nativeElement.querySelector('.hero-image');
      if (heroImg) {
        gsap.to(heroImg, {
          scale: 1.2,
          ease: 'none',
          scrollTrigger: {
            trigger: this.heroImageContainer.nativeElement,
            start: 'top top',
            end: 'bottom top',
            scrub: 2
          }
        });
      }
    }

    // Hero content fade in
    if (this.heroContent) {
      gsap.from(this.heroContent.nativeElement, {
        opacity: 0,
        y: 100,
        duration: 2,
        ease: 'power3.out',
        delay: 0.3
      });

      // Hero content parallax and fade out
      gsap.to(this.heroContent.nativeElement, {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: this.heroImageContainer.nativeElement,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to(this.heroContent.nativeElement, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: this.heroImageContainer.nativeElement,
          start: '70% top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    // Animate category cards
    gsap.utils.toArray<HTMLElement>('.category-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 150,
        rotation: 3,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 2
        }
      });
    });

    // Animate product cards with image parallax
    gsap.utils.toArray<HTMLElement>('.product-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 150,
        rotation: 3,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          end: 'top 50%',
          scrub: 2.5
        }
      });

      // Image parallax inside card
      const img = card.querySelector('.product-image');
      if (img) {
        gsap.to(img, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2
          }
        });
      }
    });

    // Animate about section
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');

    if (aboutImage) {
      gsap.from(aboutImage, {
        opacity: 0,
        x: 100,
        rotation: 3,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 2.5
        }
      });
    }

    if (aboutContent) {
      gsap.from(aboutContent, {
        opacity: 0,
        x: -100,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 2.5
        }
      });
    }

    // Section headers animation
    gsap.utils.toArray<HTMLElement>('.section-header').forEach((header) => {
      gsap.from(header, {
        opacity: 0,
        y: 80,
        duration: 1.5,
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 2
        }
      });
    });

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
    // Animate contact section
const contactSection = document.querySelector('.contact-section');
if (contactSection) {
  gsap.from(contactSection, {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
      trigger: contactSection,
      start: 'top 85%',
      end: 'top 60%',
      scrub: 2
    }
  });

  // Animate contact items
  gsap.utils.toArray<HTMLElement>('.contact-item').forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: contactSection,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Animate contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    gsap.from(contactForm, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: contactSection,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    });
  }
}
  }

  navigateToProducts(categoryName?: string): void {
    if (categoryName) {
      this.router.navigate(['/products'], {
        queryParams: { category: categoryName }
      });
    } else {
      this.router.navigate(['/products']);
    }
  }
    navigateToAbout(categoryName?: string): void {
    if (categoryName) {
      this.router.navigate(['/about'], {
        queryParams: { category: categoryName }
      });
    } else {
      this.router.navigate(['/about']);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }
}

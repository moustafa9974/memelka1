import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/navbar/navbar';

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
export class HomeComponent implements OnInit {

  productCategories: ProductCategory[] = [
    {
      categoryName: 'Dates & Varieties',
      categoryIcon: '📅',
      products: [
        {
          id: 'date-1',
          name: 'Medjool Dates',
          description: 'Rich, buttery texture with caramel notes. Perfect for natural sweetness and nutrition.',
          icon: '🗓️',
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Component initialization if needed
  }

  navigateToProducts(categoryName?: string): void {
    if (categoryName) {
      // Pass category name as query parameter if needed
      this.router.navigate(['/products'], { queryParams: { category: categoryName } });
    } else {
      this.router.navigate(['/products']);
    }
  } }

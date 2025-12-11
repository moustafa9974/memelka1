import { Component, OnInit } from '@angular/core';
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
  selector: 'app-products-page',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule, NavbarComponent]
})
export class ProductsPageComponent implements OnInit {

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
        },
        {
          id: 'fresh-4',
          name: 'Oranges',
          description: 'Fresh, juicy oranges. Rich in vitamin C and natural sweetness.',
          icon: '🍊',
          category: 'Fresh',
          badge: 'Fresh',
          image: 'Orange.jpeg'
        }
      ]
    },
    {
      categoryName: 'Chemicals',
      categoryIcon: '⚗️',
      products: [
        {
          id: 'chem-lldpe-1',
          name: 'LLDPE Film - Butene 1801 AAB',
          description: 'Heavy duty bags, liners, blends',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'LLDPE'
        },
        {
          id: 'chem-lldpe-2',
          name: 'LLDPE Film - Butene 1801 BSB',
          description: 'Heavy duty bags, liners, blends with slip & anti-block additives',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'LLDPE'
        },
        {
          id: 'chem-lldpe-3',
          name: 'LLDPE Film - Butene 1802 AAB',
          description: 'Light duty bags, liners, blends',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'LLDPE'
        },
        {
          id: 'chem-lldpe-4',
          name: 'LLDPE Film - Butene 1802 BSB',
          description: 'Light duty bags, liners, blends with slip & anti-block additives',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'LLDPE'
        },
        {
          id: 'chem-hdpe-inj-1',
          name: 'HDPE Injection Molding EM-5204-UVH',
          description: 'Caps and Closures, Pails, Industrial Containers (UV stabilized)',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-mdpe-roto-1',
          name: 'MDPE RotoMolding EM-3405-UVH',
          description: 'UV stabilized Applications like water tanks',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'MDPE'
        },
        {
          id: 'chem-hdpe-mono-1',
          name: 'HDPE Monofilament EE-5001-UVH',
          description: 'Fishnets, ropes, wovens with process aid additives',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-mdpe-film-1',
          name: 'MDPE Film EE-3914-AAH',
          description: 'Industrial liners, Mailer bags, Notion bags, Blends',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'MDPE'
        },
        {
          id: 'chem-hdpe-film-1',
          name: 'HDPE Film EE-4811-AAH',
          description: 'High strength film, Grocery bags, Multiwall bag liner, Heavy duty bags',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-blow-1',
          name: 'HDPE Blow Molding EM-5333-AAH',
          description: 'HIC bottles less than 5 liters',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-blow-2',
          name: 'HDPE Blow Molding EM-4925-AAH',
          description: 'HIC bottles High ESCR',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-blow-3',
          name: 'HDPE Blow Molding EM-4810-AAH',
          description: 'Large Part Blow Molding up to 500 liters',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-film-2',
          name: 'HDPE Film HD 5301 FB',
          description: 'Low gel film grade - High strength film, Grocery bags, Multiwall bag liner, Heavy duty bags',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-blow-4',
          name: 'HDPE Blow Molding HDPE 5502 GA',
          description: 'HIC bottles High ESCR',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-blow-5',
          name: 'HDPE Blow Molding HDPE 5301 EA',
          description: 'Large Part Blow Molding',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-roto-1',
          name: 'HDPE Rotational Molding HD 3840 UA',
          description: 'Rotational moulded items like tanks, containers, Injection moulded technical parts and closure',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-inj-1',
          name: 'HDPE Injection Molding HDPE 6070',
          description: 'Crates, Boxes, Seats, Pallets',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
        },
        {
          id: 'chem-hdpe-inj-2',
          name: 'HDPE Injection Molding HDPE 5740',
          description: 'Large dustbins, pails, pallets, boxes, fish crates, technical moulding',
          icon: '🧴',
          category: 'Chemicals',
          badge: 'HDPE'
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
          name: 'Phosphate',
          description: 'High-quality phosphate for agricultural and industrial applications. Essential mineral nutrient for crop growth and soil enrichment.',
          icon: '🌾',
          category: 'Industrial',
          badge: 'Phosphate',
          image: 'Phosphate.jpeg'
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

  ngOnInit(): void {
    // Component initialization if needed
  }

  onAddToCart(productName: string): void {
    alert(`✅ ${productName} added to cart!`);
  }

  onProductClick(product: Product): void {
    console.log('Product selected:', product.name);
  }
}

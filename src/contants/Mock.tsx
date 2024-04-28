import images from './Images';

interface Category {
  name: string;
  logo: keyof typeof images; // Assuming images is imported or defined elsewhere
}

const CATEGORIES: Category[] = [
  {name: 'Chicken', logo: 'FRIED_CHICKEN'},
  {name: 'Burgers', logo: 'BURGER'},
  {name: 'Pizza', logo: 'PIZZA'},
  {name: 'Desserts', logo: 'DESSERT'},
  {name: 'Drinks', logo: 'DRINKS'},
  {name: 'Noodles', logo: 'NOODLES'},
];

export default {CATEGORIES};

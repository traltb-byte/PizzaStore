export interface Pizza {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  prepTime: string;
  isSpicy?: boolean;
  isBestseller?: boolean;
  category: 'Signature' | 'Veggie' | 'Sides' | 'Drinks';
}

export interface Topping {
  id: string;
  name: string;
  price: number;
  included: boolean;
}

export interface CartItem {
    id: string;
    pizzaId: string;
    name: string;
    size: string;
    price: number;
    quantity: number;
    image: string;
}
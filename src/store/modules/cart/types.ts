export interface IProduct {
  id: string;
  title: string;
  price: number;
  image_url: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}

export interface Product {
  id?: number;
  name: string;
  stock: number;
  price: number;
}

export function emptyProduct(): Product {
  return {
    name: undefined,
    stock: undefined,
    price: undefined
  };
}

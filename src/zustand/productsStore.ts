import { Product } from '@/models';
import { create } from 'zustand';

interface ProductsStore {
  products: Product[];
  savedProducts: Product[];
  setProducts: (products: Product[]) => void;
  setSavedProducts: (products: Product[]) => void;
  saveProduct: (product: Product) => void;
  unSaveProduct: (product: Product) => void;
  editProduct: (id: string, info: string, description: string, minPrice: number, isSaved: boolean) => void;
}

export const useProductsStore = create<ProductsStore>()((set) => ({
  products: [],
  savedProducts: [],
  setProducts: (products) =>
    set((state) => ({
      products: products,
    })),
  setSavedProducts: (products) =>
    set((state) => ({
      savedProducts: products,
    })),
  saveProduct: (saveProduct) =>
    set((state) => ({
      products: state.products.filter((product) => product.id != saveProduct.id),
      savedProducts: [...state.savedProducts, saveProduct],
    })),
  unSaveProduct: (saveProduct) =>
    set((state) => ({
      savedProducts: state.savedProducts.filter((product) => product.id != saveProduct.id),
      products: [...state.products, saveProduct],
    })),
  editProduct: (id, info, description, minPrice, isSaved) =>
    set((state) => {
      if (isSaved) {
        const index = state.savedProducts.findIndex((product) => product.id === id);
        const products = [...state.savedProducts];
        products[index].info = info;
        products[index].description = description;
        products[index].minPrice = minPrice;
        return {
          savedProducts: products,
        };
      }
      const index = state.products.findIndex((product) => product.id === id);
      const products = [...state.products];
      products[index].info = info;
      products[index].description = description;
      products[index].minPrice = minPrice;
      return {
        products: products,
      };
    }),
}));

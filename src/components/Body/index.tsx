'use client';
import { Flex } from '@/designSystem';
import React, { useEffect } from 'react';
import ProductList from '../Product/ProductList';
import { Product } from '@/models';
import { useProductsStore } from '@/zustand';

export const Body = ({
  products,
  minPriceText,
  title,
  savedTitle,
}: {
  products: Product[];
  minPriceText: string;
  title: string;
  savedTitle: string;
}) => {
  const notSavedProducts = useProductsStore((state) => state.products);
  const savedProducts = useProductsStore((state) => state.savedProducts);
  const setProducts = useProductsStore((state) => state.setProducts);
  const setSavedProducts = useProductsStore((state) => state.setSavedProducts);
  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('savedIds') || '[]') as string[];
    setProducts(products.filter((product) => !savedIds.includes(product.id)));
    setSavedProducts(products.filter((product) => savedIds.includes(product.id)));
  }, []);
  return (
    <Flex id="body" flexDirection={'column'} flexGrow={1} p={'10px'}>
      <ProductList title={title} products={savedProducts} minPriceText={minPriceText} isSaved />
      <ProductList title={savedTitle} products={notSavedProducts} minPriceText={minPriceText} isSaved={false} />
    </Flex>
  );
};

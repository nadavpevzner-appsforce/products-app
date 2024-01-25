'use client';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '..';
import { Flex, GridItem, GridList, TextField } from '@/designSystem';
import { Product } from '@/models';
import { Typography } from '@mui/material';
import { useProductsStore } from '@/zustand';
import { ModalProvider } from '@/components';
import { useTranslations } from 'next-intl';
import { useMediaQuery } from '@/hooks';

const ProductList = ({
  products,
  minPriceText,
  title,
  isSaved,
}: {
  products: Product[];
  minPriceText: string;
  title: string;
  isSaved: boolean;
}) => {
  const { mobile } = useMediaQuery();

  const t = useTranslations('index.body');

  const [filter, setFilter] = useState<string>('');

  return (
    <Flex flexDirection={'column'} gap={2}>
      <Typography fontWeight={'bold'}>{title}</Typography>
      <TextField
        type="text"
        sx={{ width: mobile ? '100%' : '20%' }}
        placeholder={t('search-placeholder')}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ModalProvider>
        <GridList>
          {products
            .filter((product) => product.name.includes(filter))
            .map((product) => {
              return <ProductCard key={product.id} product={product} minPriceText={minPriceText} isSaved={isSaved} />;
            })}
        </GridList>
      </ModalProvider>
    </Flex>
  );
};

export default ProductList;

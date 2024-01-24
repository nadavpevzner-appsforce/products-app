'use client';
import { EditProductModal, useModal } from '@/components';
import { Flex, Box, HelpOutline, StarBorder, Typography, Tooltip, Star } from '@/designSystem';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Product } from '@/models';
import { useProductsStore } from '@/zustand';
import Image from 'next/image';
import React from 'react';

export const ProductCard = ({
  minPriceText,
  product,
  isSaved,
}: {
  minPriceText: string;
  product: Product;
  isSaved?: boolean;
}) => {
  const { mobile } = useMediaQuery();
  const { openModal } = useModal();
  const saveProduct = useProductsStore((state) => state.saveProduct);
  const unSaveProduct = useProductsStore((state) => state.unSaveProduct);

  const handleClick = () => {
    if (isSaved) {
      localStorage.setItem(
        'savedIds',
        JSON.stringify(
          JSON.parse(localStorage.getItem('savedIds') || '[]').filter(
            (savedProductId: string) => savedProductId != product.id,
          ),
        ),
      );
      unSaveProduct(product);
      return;
    }
    localStorage.setItem(
      'savedIds',
      JSON.stringify([...JSON.parse(localStorage.getItem('savedIds') || '[]'), product.id]),
    );
    saveProduct(product);
  };

  return (
    <Tooltip title={product.description}>
      {/* this div is just for the tooltip ref */}
      <div>
        <Flex
          gap={5}
          p={2}
          border={'1px solid black'}
          borderRadius={5}
          justifyContent={'space-between'}
          sx={{ cursor: 'pointer' }}
        >
          <Flex gap={5} onClick={() => openModal('edit', { product, isSaved: !!isSaved })}>
            <Image alt="product img" src={product.image} width={50} height={50} priority />
            <Box>
              <Typography fontWeight={'bold'}>{product.name}</Typography>
              <Typography>{`${minPriceText} ${product.minPrice} ₪`}</Typography>
            </Box>
          </Flex>
          <Flex flexDirection={'column'} gap={2}>
            <Box onClick={handleClick}>{isSaved ? <Star /> : <StarBorder />}</Box>
            <Tooltip title={product.info}>
              <HelpOutline />
            </Tooltip>
          </Flex>
        </Flex>
      </div>
    </Tooltip>
  );
};

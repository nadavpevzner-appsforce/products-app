'use client';
import React from 'react';
import { BaseModalProps } from '@giladappsforce/react-modal-provider/src/types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Flex, FormLabel, TextField } from '@/designSystem';
import { Product } from '@/models';
import { useForm, SubmitHandler, FieldErrors, UseFormRegister, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProductsStore } from '@/zustand';
import { useTranslations } from 'next-intl';

interface Props extends BaseModalProps {
  product: Product;
  isSaved: boolean;
  confirmText?: string;
  cancelText?: string;
}

export const EditProductModal = ({ open, onClose, product, isSaved, confirmText, cancelText }: Props) => {
  const t = useTranslations('product.form');

  const editProduct = useProductsStore((state) => state.editProduct);
  const productTypesScheme = z
    .object({
      info: z.string().min(1, { message: t('errors.info') }),
      description: z.string().min(1, { message: t('errors.description') }),
      minPrice: z.number().nonnegative(t('errors.min-price')),
    })
    .required();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<Product>({
    defaultValues: {
      info: product.info,
      description: product.description,
      minPrice: product.minPrice,
    },
    resolver: zodResolver(productTypesScheme),
  });

  const onSubmit: SubmitHandler<Product> = (data) => {
    editProduct(product.id, data.info, data.description, data.minPrice, isSaved);
    onClose?.();
  };

  return (
    <Dialog open={open || false} onClose={onClose}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection={'column'} gap={5}>
            <Flex flexDirection={'column'}>
              <FormLabel>{t('description')}</FormLabel>
              <Controller
                control={control}
                name="description"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField value={value} onChange={onChange} error={!!error?.message} helperText={error?.message} />
                )}
              />
            </Flex>
            <Flex flexDirection={'column'}>
              <FormLabel>{t('info')}</FormLabel>
              <Controller
                control={control}
                name="info"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField value={value} onChange={onChange} error={!!error?.message} helperText={error?.message} />
                )}
              />
            </Flex>
            <Flex flexDirection={'column'}>
              <FormLabel>{t('min-price')}</FormLabel>
              <Controller
                control={control}
                name="minPrice"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    type="number"
                    value={value}
                    onChange={(e) => onChange(+e.target.value)}
                    error={!!error?.message}
                    helperText={error?.message}
                  />
                )}
              />
            </Flex>
            <Button type="submit" variant="contained">
              {t('save')}
            </Button>
          </Flex>
        </form>
      </DialogContent>
      <DialogActions>
        <Flex width="100%" justifyContent={'center'}>
          <Button onClick={onClose} variant="contained" color="secondary">
            {t('cancel')}
          </Button>
        </Flex>
      </DialogActions>
    </Dialog>
  );
};

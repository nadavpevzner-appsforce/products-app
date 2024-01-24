'use client';
import { createModalProvider } from '@giladappsforce/react-modal-provider';
import { EditProductModal } from '.';

export const modals = {
  edit: EditProductModal,
  // rest of modals
};

export const { useModal, ModalProvider } = createModalProvider(modals);

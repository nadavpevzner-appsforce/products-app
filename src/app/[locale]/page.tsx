import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getTranslations } from 'next-intl/server';
import { Product, ProductWithoutId } from '@/models';
import { Box, Flex } from '@/designSystem';
import { Body, Header } from '@/components';
import ProductList from '@/components/Product/ProductList';

async function getData() {
  const res = await getDocs(collection(db, 'products'));

  const products: Product[] = [];

  res.docs.forEach((doc) => {
    const data = { ...doc.data() } as ProductWithoutId;
    products.push({
      id: doc.id,
      ...data,
    });
  });

  return products;
}

export default async function Home() {
  const tIndex = await getTranslations('index');
  const tProduct = await getTranslations('product');

  const data = await getData();

  return (
    <Flex height={'100vh'} width={'100%'} flexDirection={'column'}>
      <Box width={'100%'} bgcolor={'blue'} minHeight={'50px'}></Box>
      <Flex flexGrow={1} flexDirection={'column'}>
        <Header title={tIndex('header.title')} info={tIndex('header.info')} />
        <Body
          title={tIndex('body.all')}
          savedTitle={tIndex('body.saved')}
          products={data}
          minPriceText={tProduct('min-price')}
        />
      </Flex>
    </Flex>
  );
}

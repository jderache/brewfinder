import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

interface BeerCardProps {
  product_name: string;
  generic_name: string;
  image_url: string;
}

const BeerCard = ({ product_name, generic_name, image_url}: BeerCardProps) => {
  return (
    <View className='flex p-4'>
      <Card className='bg-white'>
        <Card.Cover source={{ uri: image_url }} resizeMode="contain" className='w-full h-[250px] flex-col flex-1 mx-auto bg-slate-50'/>
        <Card.Content className='p-4'>
          <Title className='font-bold text-xl'>{product_name}</Title>
          <Paragraph>{generic_name}</Paragraph>
          <Button mode='contained' className='mt-2' loading={true}>En savoir plus</Button>
        </Card.Content>
      </Card>
    </View>
  );
}

export default BeerCard;
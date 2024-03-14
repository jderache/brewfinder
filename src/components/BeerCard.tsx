import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface BeerCardProps {
  product_name: string;
  generic_name: string;
  image_url: string;
}

const BeerCard = ({ product_name, generic_name, image_url}: BeerCardProps) => {
  return (
    <View className='flex p-2'>
      <Card>
        <Card.Cover source={{ uri: image_url }} className='object-contain w-full h-[250px]' />
        <Card.Content className='p-2 mx-2'>
          <Title className='font-bold text-xl'>{product_name}</Title>
          <Paragraph>{generic_name}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

export default BeerCard;
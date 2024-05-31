import React from 'react';
import { useEffect, useState }  from 'react';
import { Spinner, Box, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function SingleUser() {
  const { userId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [userId]);

  if (loading) {
    return (
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  if (error) {
    return <div>Failed to fetch</div>;
  }

  return (
    <Box p="6">
      <Image src={product.image} alt={product.title} boxSize="300px" objectFit="contain" mx="auto" />
      <Text fontWeight="bold" fontSize="xl" mt="4">
        {product.title}
      </Text>
      <Text mt="2">${product.price}</Text>
      <Text mt="2">{product.category}</Text>
      <Text mt="4">{product.description}</Text>
      <Text mt="2">Rating: {product.rating.rate} ({product.rating.count} reviews)</Text>
    </Box>
  );
}

export default SingleUser;

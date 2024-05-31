import React, { useEffect, useState } from 'react';
import { Spinner, SimpleGrid, Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

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
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} mt="4" mb="4">
      {products.map((product) => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.title} boxSize="150px" objectFit="contain" />
          <Box p="6" textAlign="center">
            <Text fontWeight="bold">{product.title}</Text>
            <Text>${product.price}</Text>
            <Text>{product.category}</Text>
            <Link to={`/SingleUser/${product.id}`}> 
              <Button mt="4" colorScheme="teal">
                View
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Products;

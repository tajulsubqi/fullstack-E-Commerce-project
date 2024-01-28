import React from 'react';

interface Propsparams {
  ProductId?: string
}

const Products = ({ params }: { params: Propsparams }) => {
  return (
    <div>
      Product
    </div>
  );
};

export default Products;
import React from 'react'
import { useFilterContext } from '../context/Filter_Context';
import { MdGridView } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const {
    filter_products=[],
    
    grid_view,
    
  } = useFilterContext();
  return (
    <>

      {grid_view ? (
        <GridView products={filter_products}  />
      ) : (
        <ListView products={filter_products}  />
      )}
    </>
  );
}

export default ProductList

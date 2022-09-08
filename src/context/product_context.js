import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import {products_url as url} from '../utils/constants';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';
import axios from 'axios';

const initialstate = {
  isSidebarOpen: false,
  product_loading: false,
  product_error: false,
  products: [],
  featuredProducts: [],
  single_product_loading: false,
  single_product_error: false,
  single_products:{},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialstate);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  }; 

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  }; 

  const fetchProducts = async (url) => {
    try {
      dispatch({ type: GET_PRODUCTS_BEGIN })
      const response = await axios.get(url);
      const product = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: product });
    } catch (error) {
      dispatch({type: GET_PRODUCTS_ERROR})
    }
  }

  const fetchSingleProducts = async (url) => {
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
      const response = await axios(url);
      const products = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: products});
    } catch (error) {
      dispatch({type: GET_SINGLE_PRODUCT_ERROR})
    }
  }

  useEffect(() => {
    fetchProducts(url);
  },[])

  return (
    <ProductsContext.Provider value={{
      ...state,
      openSidebar,
      closeSidebar,
      fetchSingleProducts,
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext); 
}
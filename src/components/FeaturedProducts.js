import React from 'react';
import { useProductsContext } from '../context/product_context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Product from './Product';

const FeaturedProducts = () => {
  const {
    product_error: error,
    product_loading: loading,
    featuredProducts:featured,
  } = useProductsContext();
  
  if (error) {
    return <Error/>
  }

  if (loading) {
    return <Loading/>
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <article className="section-center featured">
        {featured.slice(0,3).map((product) => {
          return <Product key={product.id} {...product}/>
        })}
      </article>
      <Link
        to='/product'
        className='btn'>
        all products
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background: var(--clr-grey-10);
.featured {
  margin: 4rem auto;
  display: grid;
  gap: 2.5rem;
  img {
    height: 225px;
  }
}
.btn {
  display: block;
  width: 148px;
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 576px){
  .featured { 
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}
`;

export default FeaturedProducts
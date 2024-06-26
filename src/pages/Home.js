import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';


const Home = () => {

  //get products from product context
  const {products} = useContext(ProductContext)
  console.log(products);

  const filteredProducts = products.filter((item) => {
   return (
     item.category === "men's clothing" || item.
   category === "women's clothing"
   );
  });

  return (
  <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm max-auto md:max-w-one md:mx-0'>
            {filteredProducts.map( (product) => {
              return <Product product={product} key={product.id} />;
                <div className='w-full h-[300px] bg-pink-200' key={product.id}>
                  {product.title}
                  </div>
              
            })}
        </div>
      </div>
    </section>
  </div>
   );
};

export default Home;

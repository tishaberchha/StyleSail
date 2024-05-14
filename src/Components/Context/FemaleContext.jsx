import React,{useContext} from 'react'
import { ProductContext } from "../ProductContext/ProductContext";
import Product from "../Product/Product";
import womenimg from '../Assets/banner_women.png'
const FemaleContext = () => {
const { products } = useContext(ProductContext);
console.log(products);
const fileredProduct = products.filter((item) => {
  return item.category === "women's clothing";
});
console.log(fileredProduct);
return (
  <div>
    <section className="py-16">
      <div className="mainclothes container mx-auto">
        <img
          style={{ width: "100vw", height: "300px", marginBottom: "30px" }}
          src={womenimg}
          alt=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {fileredProduct.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
          {fileredProduct.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  </div>
);
}

export default FemaleContext

import React, { useContext } from "react";
import "./ShopCategory.css"
import { ShopContext } from "../Context/ShopContext";
import Item from "../Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-catg">
      {/* <img className="shopcategory-banner" src={props.banner} alt="" /> */}
      <div className="shopcategory-index">
        <p>
          <span>Showing 1-12</span>
        </p>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.title}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <hr className="hr" />
      <div className="shopcategory_load">
        <div className="page">
          <p> Page 1 of 20 </p>
        </div>
        <div className="numbers">
          <span>&nbsp;1</span> 2 3 4 5 6 7 8 9 10
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;

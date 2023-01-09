// import { listProduct } from "const/listProduct";
import { FC, ReactElement, useState } from "react";
import "styles/modules/content.scss";
import Filter from "./Filter";
import { Rate } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
export type TProduct = {
  id: string;
  image: string;
  name: string;
  category: string;
  collection: number;
  price: number;
  cart: string;
  color: string;
  quantity: number;
};

type ContentProps = {
  listDataFilter?: TProduct[];
  onChangeValue: Function;
  handleAddCart: Function;
};

const Content: FC<ContentProps> = ({
  listDataFilter,
  onChangeValue,
  handleAddCart,
}): ReactElement => {
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  return (
    <div className="content-page">
      <div className="mobile-wrap-filter">
        <h1 className="wrap-name">Filters</h1>
        <DownOutlined onClick={() => setIsOpenFilter(!isOpenFilter)} />
      </div>
      <Filter isOpenFilter={isOpenFilter} onChangeValue={onChangeValue} />
      {listDataFilter?.map((product, index) => {
        return (
          <div className="content-product" key={product.id}>
            <img
              src={product.image}
              alt="product-img"
              className="product-image"
            />
            <div className="product-description">
              <div className="product-title">
                <p className="product-name">{product.name}</p>
                <p className="product-category">{product.category}</p>
              </div>
              <p className="product-price">${product.price}</p>
              <div className="product-bought">
                <div className="product-collection">
                  <Rate defaultValue={product.collection} />
                </div>
                <img
                  className="product-cart"
                  alt="product-cart"
                  src={product.cart}
                  onClick={() => handleAddCart(product)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;

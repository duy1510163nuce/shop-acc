import { Rate } from "antd";
import { ReactElement } from "react";

const MagazinePage = (): ReactElement => {
  return (
    <div className="magazine-page">
      <div className="content-page">
        
        <div className="content-product">
          <img
            src="images/image.png"
            alt="product-img"
            className="product-image"
          />
          <div className="product-description">
            <div className="product-title">
              <p className="product-name">colum</p>
              <p className="product-category">chair</p>
            </div>
            <p className="product-price">$2600</p>
            <div className="product-bought">
              <div className="product-collection">
                <Rate defaultValue={4} />
              </div>
              <img
                className="product-cart"
                alt="product-cart"
                src="images/cart.png"
              />
            </div>
          </div>
        </div>
        <div className="content-product">
          <img
            src="images/image1.png"
            alt="product-img"
            className="product-image"
          />
          <div className="product-description">
            <div className="product-title">
              <p className="product-name">colum</p>
              <p className="product-category">chair</p>
            </div>
            <p className="product-price">$2600</p>
            <div className="product-bought">
              <div className="product-collection">
                <Rate defaultValue={4} />
              </div>
              <img
                className="product-cart"
                alt="product-cart"
                src="images/cart.png"
              />
            </div>
          </div>
        </div>
        <div className="content-product">
          <img
            src="images/image2.png"
            alt="product-img"
            className="product-image"
          />
          <div className="product-description">
            <div className="product-title">
              <p className="product-name">colum</p>
              <p className="product-category">chair</p>
            </div>
            <p className="product-price">$2600</p>
            <div className="product-bought">
              <div className="product-collection">
                <Rate defaultValue={4} />
              </div>
              <img
                className="product-cart"
                alt="product-cart"
                src="images/cart.png"
              />
            </div>
          </div>
        </div>
        <div className="content-product">
          <img
            src="images/image4.png"
            alt="product-img"
            className="product-image"
          />
          <div className="product-description">
            <div className="product-title">
              <p className="product-name">colum</p>
              <p className="product-category">chair</p>
            </div>
            <p className="product-price">$2600</p>
            <div className="product-bought">
              <div className="product-collection">
                <Rate defaultValue={4} />
              </div>
              <img
                className="product-cart"
                alt="product-cart"
                src="images/cart.png"
              />
            </div>
          </div>
        </div>

        <div className="content-product">
          <img
            src="images/image6.png"
            alt="product-img"
            className="product-image"
          />
          <div className="product-description">
            <div className="product-title">
              <p className="product-name">colum</p>
              <p className="product-category">chair</p>
            </div>
            <p className="product-price">$2600</p>
            <div className="product-bought">
              <div className="product-collection">
                <Rate defaultValue={4} />
              </div>
              <img
                className="product-cart"
                alt="product-cart"
                src="images/cart.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazinePage;

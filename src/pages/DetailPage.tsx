import { Rate } from "antd";
import { TProduct } from "components/modules/Content";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getData, getDetail } from "services/handleData";

export default function DetailPage() {
  const [productDetail, setProductDetail] = useState<TProduct>();
  const { id } = useParams();

  const fetchProductDetail = useCallback(async (id: string) => {
    const data = await getDetail(id);
    setProductDetail(data);
  }, []);

  useEffect(() => {
    if (!id) return;
    fetchProductDetail(id);
  }, [id]);

  console.log(productDetail);

  return (
    <div className="detail-page">
      {productDetail && (
        <div className="content-page">
          
        
        <div className="content-product" key={productDetail.id}>
          <img
            src={productDetail.image}
            alt="product-img"
            className="product-image"
          />
          <div className="product-description">
            <div className="product-title">
              <p className="product-name">{productDetail.name}</p>
              <p className="product-category">{productDetail.category}</p>
            </div>
            <p className="product-price">${productDetail.price}</p>
            <div className="product-bought">
              <div className="product-collection">
                <Rate defaultValue={productDetail.collection} />
              </div>
              <img
                className="product-cart"
                alt="product-cart"
                src={productDetail.cart}
              />
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

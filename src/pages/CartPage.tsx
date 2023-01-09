import { Button, Rate, Row, Table } from "antd";
import Footer from "components/modules/Footer";
import Header from "components/modules/Header";
import { TProduct } from "components/modules/Content";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "styles/modules/cartPage.scss";
import { deleteProductCart } from "redux/DataCartSlice";
// import { deleteProductCart } from "redux/DataCartSlice";

const CartPage = (): ReactElement => {
  const [totalProductsCart, setTotalProductsCart] = useState(0);
  const [totalCart, setTotalCart] = useState<number>(0);
  const [checkDeleteProduct, setCheckDeleteProduct] = useState(false);
  const cartProduct = useSelector((store: any) => store.dataCartSlice);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    cartProduct.forEach((element: TProduct) => {
      setTotalCart((prev: number) => prev + element.price * element.quantity);
    });
  }, [cartProduct]);

  const handleRemoveItemCart = (item: any,index: number) => {
  dispatch(deleteProductCart(item,));

  };

  // dispatch(deleteProductCart(id))

  return (
    <div className="cart-page">
      <Header totalProductsCart={totalProductsCart} />
      <div className="cart-wrap">
        <div className="cart-title-table">
          <p className="title-id">STT</p>
          <p className="title-image">Image </p>
          <p className="title-name">Name</p>
          <p className="title-category">Category</p>
          <p className="title-quantity">Quantity</p>
          <p className="title-price">Price</p>
          <p className="title-action">Action</p>
        </div>
        <div className="cart-table">
          {cartProduct &&
            cartProduct.map((item: TProduct, index: number) => {
              return (
                <div className="cart-item" key={index}>
                  <p className="table-id">{index + 1}</p>
                  <div className="table-image">
                    <img
                      src={item.image}
                      alt="cart-product"
                      className="cart-image"
                    />
                  </div>
                  <p className="table-name">{item.name}</p>
                  <p className="table-category">{item.category}</p>
                  <p className="table-quantity">{item.quantity}</p>

                  <p className="table-price">${item.price}</p>
                  <Button
                    type="primary"
                    danger
                    className="table-btn"
                    onClick={() => {
                      handleRemoveItemCart(item,index);
                    }}
                  >
                    Xóa
                  </Button>
                </div>
              );
            })}
        </div>
        <p className="cart-total">
          Total :<span className="cart-money">${totalCart}</span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;

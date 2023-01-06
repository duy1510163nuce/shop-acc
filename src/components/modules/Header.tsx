import { navbarMenu } from "const/navbaMenu";
import { FC, ReactElement, useState } from "react";
import "styles/modules/header.scss";
import { Button, Modal } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
const Header: FC = (): ReactElement => {
  const [isModalOpen, setOpen] = useState(false);

  return (
    <div className="header-page">
      <div className="header-menu">
        <img src="images/logo.png" alt="header-logo" className="header-image" />
        <div className="header-navbar">
          <ul className="nav-list">
            {navbarMenu.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="header-cart">
        <img src="images/cart.png" alt="header-cart" className="cart-image" />
        <p className="header-login">Login</p>
        <Button className="header-button-menu" onClick={() => setOpen(true)}>
          <MenuOutlined />
        </Button>
        <div className={isModalOpen ? "header-modal" : "header-modal-close"}>
          <div className="modal-list">
            <img
              src="images/logo.png"
              alt="header-logo"
              className="header-image"
            />
            <div className="modal-navigation">
              <img
                src="images/modal.png"
                alt="header-logo"
                className="image-cart-white"
              />
              <Button
                className="header-button-close"
                onClick={() => setOpen(false)}
              >
                <CloseOutlined />
              </Button>
              
            </div>
          </div>
          <div className="modal-item">
                <p className="modal-name-item">Home</p>
                <p className="modal-name-item">Shop</p>
                <p className="modal-name-item">Magazine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

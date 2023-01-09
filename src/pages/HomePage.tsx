import { FC, ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content, { TProduct } from "components/modules/Content";
import Header from "components/modules/Header";
import Search from "components/modules/Search";
import { getData } from "services/handleData";
import Footer from "components/modules/Footer";
import "styles/response/response.scss";
import { getListProduct } from "redux/infoProductSlice";
import { addDataCart } from "redux/DataCartSlice";
import { count } from "console";

type TValueOnchange = {
  collection: number | undefined;
  category: string | undefined;
  color: string | undefined;
  price: number | undefined;
};

const HomePage: FC = (): ReactElement => {
  const [totalProductsCart, setTotalProductsCart] = useState(0);
  const [productCart, setProductCart] = useState<TProduct[]>([]);
  const [listProduct, setListProduct] = useState<TProduct[]>([]);
  const [listDataFilter, setListDataFilter] = useState<TProduct[]>([]);
  const [nameFilter, setNameFilter] = useState();
  const [valueOnchange, setValueOnchange] = useState({
    collection: 0,
    category: "",
    color: "",
    price: 0,
  });
  const dispatch = useDispatch<any>();
  const listInfoProduct = useSelector((store: any) => store.listInfoProduct);
  const listProductCart = useSelector((store: any) => store.dataCartSlice);
  useEffect(() => {
    dispatch(getListProduct());
  }, []);

  const onChangeValue = (value: any, type: string) => {
    // // if(type === 'rage'){
    //   setListDataFilter(listData.filter((item)=>item.collection === value));
    // }
    // if(type === 'color'){
    //   //   setListDataFilter(listData.filter((item)=>item.color.toLowerCase() === value.toLowerCase()));
    // }
    // if(type === 'category'){
    //   //   setListDataFilter(listData.filter((item)=>item.category.toLowerCase() === value.toLowerCase()));
    // }

    switch (type) {
      case "rage":
        setValueOnchange({ ...valueOnchange, collection: value });
        break;
      case "category":
        setValueOnchange({ ...valueOnchange, category: value });
        break;
      case "color":
        setValueOnchange({ ...valueOnchange, color: value });
        break;
      case "price":
        setValueOnchange({ ...valueOnchange, price: value });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const { collection, category, color, price } = valueOnchange;
    setListDataFilter(
      listProduct.filter((item) => {
        return (
          // !collection || collection === 0
          collection &&
          // ? true
          // :
          item.collection === collection &&
          (!category || category === ""
            ? true
            : item.category.toLowerCase().includes(category.toLowerCase())) &&
          (!color || color === ""
            ? true
            : item.color.toLowerCase() === color.toLowerCase()) &&
          (!price || price === 0 ? true : item.price > price) &&
          (nameFilter === "" || !nameFilter
            ? true
            : item.name.toLowerCase().includes(nameFilter))
        );
      })
    );
  }, [valueOnchange, nameFilter]);

  const handleAddCart = (product: any) => {
    setTotalProductsCart((pre) => pre + 1);
    dispatch(
      addDataCart(
        // listInfoProduct?.find((item: TProduct) => item.id === product.id)
        product
      )
    );
  };

  return (
    <div className="home-page">
      <Header totalProductsCart={totalProductsCart} />
      <Search setNameFilter={setNameFilter} />
      <Content
        listDataFilter={listInfoProduct}
        handleAddCart={handleAddCart}
        onChangeValue={onChangeValue}
      />
      <Footer />
    </div>
  );
};

export default HomePage;

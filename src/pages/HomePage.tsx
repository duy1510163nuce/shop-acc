import { FC, ReactElement, useState, useEffect } from "react";
import Content, { TProduct } from "components/modules/Content";
import Header from "components/modules/Header";
import Search from "components/modules/Search";
import { getData } from "services/handleData";
import Footer from "components/modules/Footer";
import "styles/response/response.scss";

// enum ValueFilterState {
//     collectionFilter,
//     categoryFilter,
//     colorFilter,
//     priceFilter,
// }
const HomePage: FC = (): ReactElement => {
  const [listProduct, setListProduct] = useState<TProduct[]>([]);
  const [listDataFilter, setListDataFilter] = useState<TProduct[]>([])
  const [nameFilter, setNameFilter] = useState("");
  const [valueOnchange, setValueOnchange] = useState({
    collection: 0,
    category: "",
    color: "",
    price: 0,
  });
  useEffect(() => {
    const path = "/listProduct";
    const getListProduct = async () => {
      const listData = await getData(path);
      setListProduct(listData);
      setListDataFilter(listData);
    };
    getListProduct();
  }, []);

  const onChangeValueSearch = (e: any) => {
    setNameFilter(e.target.value);
  };
  const onChangeValue = (value: any, type: string) => {
    console.log(value);
    if (type === 'rage') {
    setListDataFilter(listProduct.filter((item) => item.collection === value))
  
    }
    if(type === 'color'){
      setListDataFilter(listProduct.filter((item) => item.color.toLowerCase() === value.toLowerCase()))
    }
    if(type === 'category'){
      setListDataFilter(listProduct.filter((item) => item.category.toLowerCase().includes(value.toLowerCase()) ))
    }
    if(type === 'price'){
      setListDataFilter(listProduct.filter((item) => item.price ===    value))
    }




    // switch (index) {
    //   case 1:
    //     setValueOnchange({ ...valueOnchange, collection: value });
    //     break;
    //   case 2:
    //     setValueOnchange({ ...valueOnchange, category: value });
    //     break;
    //   case 3:
    //     setValueOnchange({ ...valueOnchange, color: value });
    //     break;
    //   case 4:
    //     setValueOnchange({ ...valueOnchange, price: value });
    //     break;

    //   default:
    //     break;
    // }
  };
  // useEffect(() => {
  //   setListDataFilter(
  //     listProduct.filter((item: any) => {
  //       return item.name?.toLowerCase().includes(nameFilter?.toLowerCase());
  //     })
  //   );
  // }, [nameFilter, listProduct]);

  // useEffect(() => {
  //   setListDataFilter(
  //     listProduct.filter((item: any) => {
  //       return (
  //         (item?.color.toLowerCase().includes(valueOnchange?.color.toLowerCase())
  //         && item?.collection === valueOnchange.collection) 
  //         // && item?.category
  //         // && item.name?.toLowerCase().includes(nameFilter?.toLowerCase())
  //         //  && item.price > valueOnchange.price
  //       );
  //     })
  //   );
  // }, [valueOnchange]);

  console.log(listDataFilter);
  return (
    <div className="home-page">
      <Header />
      <Search
        onChangeValueSearch={onChangeValueSearch}
      />
      <Content listDataFilter={listDataFilter} onChangeValue={onChangeValue} />
      <Footer />
    </div>
  );
};

export default HomePage;

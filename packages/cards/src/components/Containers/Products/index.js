import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../Presentational/Card";
import IconSpinner from "../../Presentational/Icons/Spinner";

import { getProducts } from "../../../services/Backend";
import { useCart } from "../../../contexts/Cart";
import * as S from "./styled";

const LIMIT = 12;

const Products = () => {
  const { setCart } = useCart();
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(LIMIT);

  const listProducts = async () => {
    const response = await getProducts(`?limit=${LIMIT}&skip=0`);
    setProducts(response.products);
  };

  useEffect(() => {
    listProducts();
  }, []);

  const fetchMoreData = async () => {
    const response = await getProducts(`?limit=${LIMIT}&skip=${skip}`);
    setProducts((prevItems) => [...prevItems, ...response.products]);
    response.products.length > 0 ? setHasMore(true) : setHasMore(false);
    setSkip((prevIndex) => prevIndex + 12);
  };

  return (
    <S.Main>
      <div className="album py-5">
        <div className="container">
          <InfiniteScroll
            dataLength={products}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              <S.Spinner>
                <IconSpinner />
              </S.Spinner>
            }
          >
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {products.map((item, key) => (
                <Card
                  key={key}
                  title={item.title}
                  description={item.description}
                  image={item.thumbnail}
                  price={`$ ${item.price}`}
                  buttonTitle={"COMPRAS"}
                  onClick={() => setCart((prevState) => [...prevState, item])}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </S.Main>
  );
};

export default Products;

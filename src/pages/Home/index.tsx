import { PageArea, SearchArea } from "./styled";
import { PageContainer } from ".././../components/MainComponent";
import { Children, useEffect, useState } from "react";
import OlxApi from "../../helpers/OlxApi";
import { StateList } from "../../pages/Signup/index";
import { Link } from "react-router-dom";
import { AdItem } from "../../components/partials/AdItem";

export type Ad = {
  id?: string;
  title?: string;
  price?: number;
  priceNegotiable?: boolean;
  image?: string;
};

export default function Home() {
  const [stateList, setStateList] = useState<StateList[]>();
  const [category, setCategory] = useState<any[]>();
  const [adList, setAdList] = useState<Ad[]>();
  console.log("state", adList);

  useEffect(() => {
    const getStates = async () => {
      const slist = await OlxApi.getState();
      setStateList(slist);
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCatogories = async () => {
      const category = await OlxApi.getCatogories();

      setCategory(category);
    };
    getCatogories();
    //console.log("retorno", category);
  }, []);

  useEffect(() => {
    const getRecentAd = async () => {
      const ad = await OlxApi.getAds({
        sort: "desc",
        limit: 8,
      });
      console.log("func", ad);

      setAdList(ad);
    };
    getRecentAd();
    //console.log("retorno", category);
  }, []);
  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                {stateList?.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <button> Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {category?.map((item, index) => (
              <Link
                key={index}
                to={`/ads?cat=${item.slug}`}
                className="categoryItem"
              >
                <img src={item.img} alt="" />
                {item.name}
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>
          <h2> Anúncios Recentes </h2>
          <div className="list">
            {adList?.map((item, index) => (
              <AdItem key={index} data={item} />
            ))}
          </div>
          <Link to="/ads" className="seeAllLink">
            Ver todos
          </Link>
          <hr />
          <p>
            Lorem ipsum dolor sit amet. In atque deleniti aut perspiciatis quia
            aut labore dolor cum numquam ipsa. Sed similique ea fuga magnam aut
            atque perferendis hic similique vero. Ea pariatur ipsa sit saepe
            atque est numquam omnis in ullam porro At expedita aliquam? Non
            laudantium aspernatur a reprehenderit amet sed odit voluptatum qui
            consequatur eaque et saepe ipsam?
          </p>
        </PageArea>
      </PageContainer>
    </>
  );
}

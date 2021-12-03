import { PageArea } from "./styled";
import { PageContainer } from ".././../components/MainComponent";
import { useEffect, useState } from "react";
import OlxApi from "../../helpers/OlxApi";

import { StateList } from "../../pages/Signup/index";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AdItem } from "../../components/partials/AdItem";

export type Ad = {
  id?: string;
  title?: string;
  price?: number;
  priceNegotiable?: boolean;
  image?: string;
};

export default function AllPage() {
  //alert(useLocation().search);

  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryString();

  const [q, setQ] = useState<any>(query.get("q") != null ? query.get("q") : "");
  const [cat, setCat] = useState<any>(
    query.get("cat") != null ? query.get("cat") : ""
  );
  const [state, setState] = useState<any>(
    query.get("state") != null ? query.get("state") : ""
  );

  const [stateList, setStateList] = useState<StateList[]>();
  const [category, setCategory] = useState<any[]>();
  const [adList, setAdList] = useState<Ad[]>();
  console.log("state", stateList);
  console.log("category", category);

  useEffect(() => {
    const getStates = async () => {
      const slist = await OlxApi.getState();
      setStateList(slist);
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCatogories = async () => {
      const cat = await OlxApi.getCatogories();

      setCategory(cat);
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
    <PageContainer>
      <PageArea>
        <div className="leftS">
          <form method="GET">
            <input
              value={q}
              placeholder="O que você procura?"
              type="text"
              name="q"
              onChange={(e) => setQ(e.target.value)}
            />
            <div className="filterName"> Estado:</div>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              name="estado"
            >
              {/* /<option></option> */}
              {stateList?.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>

            <div className="filterName">
              Categoria
              {category?.map((item, index) => (
                <li
                  onClick={() => setCat(item.slug)}
                  className={
                    cat === item.slug ? "categoryItem active" : "categoryItem"
                  }
                  key={index}
                >
                  <img src={item.img} alt="" />
                  <span>{item.name}</span>
                </li>
              ))}
            </div>

            <ul></ul>
          </form>
        </div>
        <div className="rightS">resto</div>
      </PageArea>
    </PageContainer>
  );
}

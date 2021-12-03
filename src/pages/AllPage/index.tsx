import { PageArea } from "./styled";
import { PageContainer } from ".././../components/MainComponent";
import { useEffect, useRef, useState } from "react";
import OlxApi from "../../helpers/OlxApi";

import { StateList } from "../../pages/Signup/index";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AdItem } from "../../components/partials/AdItem";
import { clearTimeout } from "timers";

export type Ad = {
  id?: string;
  title?: string;
  price?: number;
  priceNegotiable?: boolean;
  image?: string;
};

export default function AllPage() {
  let time: NodeJS.Timeout;
  const timeout = useRef();

  const navigation = useNavigate();

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
  const [opacity, setOpacity] = useState(1);

  const [loading, setLoading] = useState(true);

  console.log("state", stateList);
  console.log("category", category);

  const getAdsList = async () => {
    setLoading(true);
    const json = await OlxApi.getAds({
      sort: "desc",
      limit: 8,
      q,
      cat,
      state,
    });
    setAdList(json);
    setOpacity(1);
    setLoading(false);
  };

  useEffect(() => {
    let queryString = [];
    if (q) {
      queryString.push(`q=${q}`);
    }
    if (cat) {
      queryString.push(`cat=${cat}`);
    }
    if (state) {
      queryString.push(`state=${state}`);
    }

    navigation({
      search: `?${queryString.join("&")}`,
    });
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(getAdsList, 2000);
    setOpacity(0.3);
    getAdsList();
  }, [q, cat, state]);

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
              <option> </option>
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
        <div className="rightS">
          <h2>Resultados:</h2>
          {loading && <div className="listWarning"> Carregando... </div>}

          {!loading && adList?.length === 0 && (
            <div className="listWarning"> Não encontrado... </div>
          )}

          <div className="list" style={{ opacity: opacity }}>
            {adList?.map((item: any, index: any) => (
              <AdItem className="q" key={index} {...item} />
            ))}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
}

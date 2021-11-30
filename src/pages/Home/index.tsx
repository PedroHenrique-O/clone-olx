import { PageArea, SearchArea } from "./styled";
import { PageContainer } from ".././../components/MainComponent";
import { useEffect, useState } from "react";
import OlxApi from "../../helpers/OlxApi";
import { StateList } from "../../pages/Signup/index";
import { Link } from "react-router-dom";

export default function Home() {
  const [stateList, setStateList] = useState<StateList[]>();
  const [category, setCategory] = useState<any[]>();

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
    console.log("retorno", category);
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
        <PageArea>. . .</PageArea>
      </PageContainer>
    </>
  );
}

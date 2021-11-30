import { PageArea, SearchArea } from "./styled";
import { PageContainer } from ".././../components/MainComponent";
import { useState } from "react";
import OlxApi from "../../helpers/OlxApi";

export default function Home() {
  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state"></select>
              <button> Pesquisar</button>
            </form>
          </div>
          <div className="categoryList"></div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>. . .</PageArea>
      </PageContainer>
    </>
  );
}

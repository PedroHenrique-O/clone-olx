import { PageArea } from "./styled";
import {
  ErrorMessage,
  PageContainer,
  PageTitle,
} from ".././../components/MainComponent";
import { useEffect, useRef, useState } from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import OlxApi from "../../helpers/OlxApi";

import { useNavigate } from "react-router";
//import { doLogin } from "../../helpers/AuthHandler";
// import { useNavigate } from "react-router-dom";

//http://alunos.b7web.com.br:501

export default function SellPage() {
  const fileField = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();
  //   let navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceNegociable, setPriceNegociable] = useState(false);
  const [desc, setDesc] = useState("");

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCatogories = async () => {
      const categ = await OlxApi.getCatogories();
      console.log("sellpage", categ);
      setCategories(categ);
    };

    getCatogories();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    let erros = [];
    if (!title.trim()) {
      erros.push("Sem título");
    }
    if (!category) {
      erros.push("Sem categoria");
    }
    if (erros.length === 0) {
      const fData: any = new FormData();
      fData.append("title", title);
      fData.append("price", price);
      fData.append("priceneg", priceNegociable);
      fData.append("desc", desc);
      fData.append("cat", category);

      if (fileField!.current!.files!.length > 0) {
        for (let i = 0; i < fileField!.current!.files!.length; i++) {
          fData.append("img", fileField!.current!.files![i]);
        }
      }

      const json = await OlxApi.addAd(fData);

      if (!json.error) {
        navigate(`/ad/${json.id}`);
      } else {
        setError(json.error);
      }
    } else {
      setError(erros.join("\n"));
    }

    setDisabled(false);
  };

  const priceMask = createNumberMask({
    prefix: "R$ ",
    includeThousandsSeparator: true,
    thousandsSeparator: "-",

    allowDecimal: true,
    decimalSymbol: ",",
  });

  return (
    <PageContainer>
      <PageTitle>Postar um anúncio</PageTitle>
      <PageArea>
        {error && <ErrorMessage> {error} </ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Título</div>
            <div className="area--input">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                disabled={disabled}
              ></input>
            </div>
          </label>

          <label className="area">
            <div className="area--title">Categoria</div>
            <div className="area--input">
              <select
                disabled={disabled}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                {/* <option></option> */}
                {categories?.map((item: any, index) => (
                  <option key={item._id}> {item.name} </option>
                ))}
              </select>
            </div>
          </label>

          <label className="area">
            <div className="area--title"> Price </div>
            <div className="area--input">
              <MaskedInput
                mask={priceMask}
                placeholder="R$"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={disabled || priceNegociable}
              />
            </div>
          </label>

          <label className="area">
            <div className="area--title"> Preço negociável </div>
            <div className="area--input">
              <input
                className="check-box"
                type="checkbox"
                disabled={disabled}
                checked={priceNegociable}
                onChange={(e) => setPriceNegociable(!priceNegociable)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title"> Descrição </div>
            <div className="area--input">
              <textarea
                disabled={disabled}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </label>
          <label className="area">
            <div className="area--title"> Imagens (1 ou mais) </div>
            <div className="area--input">
              <input type="file" ref={fileField} disabled={disabled} multiple />
            </div>
          </label>

          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button type="submit">Adicionar anúncio</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

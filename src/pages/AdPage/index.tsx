import { BreadCrumb, Fake, OthersArea, PageArea } from "./styled";
import { PageContainer } from ".././../components/MainComponent";
// import { Slide } from "react-slideshow-image";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { useParams } from "react-router";
import { useState, useEffect, Key } from "react";
import OlxApi from "../../helpers/OlxApi";
import { AdItem } from "../../components/partials/AdItem";
import { Link } from "react-router-dom";

type Id = {
  id: string;
};

type idInfo = {
  title: string;
};

export default function AdPage() {
  const params = useParams() as Id;
  const adId: string = params.id;

  console.log("ad", adId);

  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState<any>({});
  console.log("others", adInfo.others);
  console.log("state", adInfo);

  useEffect(() => {
    const getAdInfo = async (adId: string) => {
      const json = await OlxApi.getAd(adId, true);
      setAdInfo(json);
      setLoading(false);
      console.log("lll", adInfo);
    };
    getAdInfo(adId);
  }, []);

  const formatDate = (date: string | number | Date) => {
    let cDate = new Date(date);

    let months = [
      "janeiro",
      "fevereiro",
      "março",
      "maio",
      "abril",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];

    let cDay = cDate.getDate();
    let cMonth = cDate.getMonth();

    let cYear = cDate.getFullYear();

    return `${cDay} de ${months[cMonth]} de ${cYear}`;
  };

  return (
    <PageContainer>
      <BreadCrumb>
        Você está aqui:
        <Link to="/">Home</Link>/
        <Link to={`/ads?state=${adInfo.stateName}`}> {adInfo.stateName}</Link>/
        <Link to={`/ads?state=${adInfo.stateName}&cat${adInfo.category?.slug}`}>
          {" "}
          {adInfo.category?.name}
        </Link>
        / {adInfo.title}
      </BreadCrumb>
      <PageArea>
        <div className="leftSide">
          <div className="box">
            <div className="box-images">
              {" "}
              {loading && <Fake height={300} />}
              {adInfo.images && (
                <Slide>
                  {adInfo.images.map(
                    (img: string, index: Key | null | undefined) => (
                      <div key={index} className="each-slide">
                        <img src={img} alt="" />
                      </div>
                    )
                  )}
                </Slide>
              )}
            </div>
            <div className="box-information">
              <div className="item-name">
                {loading && <Fake height={20} />}
                {adInfo.title && <h2> {adInfo.title}</h2>}
                {adInfo.dateCreated && (
                  <small> criado em: {formatDate(adInfo.dateCreated)} </small>
                )}
              </div>
              <div className="item-Description">
                {loading && <Fake height={100} />}
                {adInfo.description}
                <hr />
                {adInfo.views && <small> Visualizações: {adInfo.views} </small>}
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="box box--padding">
            {loading && <Fake height={20} />}
            {adInfo.priceNegotiable && "Preço negociável"}
            {!adInfo.priceNegotiable && adInfo.price && (
              <div className="price">
                Preço: R$ <span> {adInfo.price} </span>
              </div>
            )}
          </div>
          {loading && <Fake height={50} />}
          {adInfo.userInfo && (
            <>
              <a
                href={`mailto:${adInfo.userInfo.email}`}
                className="seller-contact"
              >
                Fale com o vendedor
              </a>

              <div className="createdby box box--padding">
                Autor:
                <strong>{adInfo.userInfo.name}</strong>
                <small>Email: {adInfo.userInfo.email}</small>
                <small>Estado: {adInfo.stateName}</small>
              </div>
            </>
          )}
        </div>
      </PageArea>
      <OthersArea>
        {adInfo.others && (
          <>
            <h2> Outros ofertas do vendedor: </h2>
            {adInfo.others.map((item: any, index: any) => (
              <div className="list">
                <AdItem key={index} {...item} />
              </div>
            ))}
          </>
        )}
      </OthersArea>
    </PageContainer>
  );
}

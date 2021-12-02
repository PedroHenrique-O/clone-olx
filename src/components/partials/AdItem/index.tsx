import { Item } from "./style";
import { Link } from "react-router-dom";

export type Ad = {
  id?: string;
  title?: string;
  price?: number;
  priceNegotiable?: boolean;
  image?: string;
};
// { id, title, price, priceNegotiable, image }: Ad

export function AdItem({ id, title, price, image, priceNegotiable }: Ad) {
  let priceStatus = "";
  if (priceNegotiable) {
    priceStatus = "Preço negociável";
  } else {
    priceStatus = `R$ ${price}`;
  }

  let newImage;
  //teste
  if (image === "http://alunos.b7web.com.br:501/media/default.jpg") {
    newImage =
      "https://www.kenyons.com/wp-content/uploads/2017/04/default-image.jpg";
  } else {
    newImage = image;
  }
  //teste

  return (
    <Item>
      <Link to={`/ad/${id}`}>
        <div className="itemImage">
          <img src={newImage} alt={title} />
        </div>

        <div className="itemName">{title}</div>

        <div className="itemPrice"> {priceStatus}</div>
      </Link>
    </Item>
  );
}

import { Item } from "./style";
import { Link } from "react-router-dom";

export type Ad = {
  id: string;
  title: string;
  price?: number;
  priceNegotiable?: boolean;
  image: string;
};

export function AdItem(
  data: any

  // { id, title, price, priceNegotiable, image }: Ad
) {
  return (
    <Item className="adItem">
      <Link to={`/ad/${data.id}`}>
        <div className="itemImage">
          <img src={data.image} alt={data.title} />
        </div>

        <div className="itemName">{data.title}</div>

        <div className="itemPrice">...</div>
      </Link>
    </Item>
  );
}

import { useParams } from "react-router-dom";
import { itemDetailsData } from "../data";
import { NotFound } from "./NotFound";

export const ItemDetails = () => {
  const { itemId } = useParams();

  const item = itemDetailsData.find((i) => i.id === itemId);

  if (!item) {
    return <NotFound/>;
  }

  return (
    <div className="item-details page">
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
      <ul className="specs">
        {item.specs.map((spec, i) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>

      <p>{item.description}</p>
    </div>
  );
};

import { items } from "../data";
import {Link} from 'react-router-dom'
export const List = () => {
  return (
    <div className="list page">
      <h3>List page</h3>
      <div className="item-list">
        {items.map((i) => (
          <div className="item" key={i.id}>
            <Link to={`/list/${i.id}`}>
              {console.log(i.id)}
            <h3>{i.name}</h3>
            <img src={i.image} alt={i.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemsData";
const ItemDetails = () => {
      const {id} = useParams();
      const item = ITEMS.find((item) => item.id===id);
      console.log(item);
    //   console.log(params);
      return (
        <>
          <main>
            <h1>ItemDetails Page</h1>
          </main>
          <h2>{item.title}</h2>
          <h3>{item.description}</h3>
        </>
      );
}
export default ItemDetails;
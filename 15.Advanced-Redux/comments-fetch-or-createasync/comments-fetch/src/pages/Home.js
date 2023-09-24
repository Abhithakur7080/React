import { useEffect } from "react";
import { List } from "../components/List";
// import comments actions here
import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../redux/reducers/commentsReducer"

import { useDispatch } from "react-redux"

export const Home = () => {
  const dispatch = useDispatch();
  const getComments = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch comments.");
      }
      const data = await response.json();
      // dispatch fetch success action here
      dispatch(fetchSuccess(data));
    } catch (e) {
      // dispatch fetch error action here
      dispatch(fetchError());
    }
  };
  useEffect(() => {
    // dispatch fetch start action here
    dispatch(fetchStart())
    // execute the getComments function here
    getComments();
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};

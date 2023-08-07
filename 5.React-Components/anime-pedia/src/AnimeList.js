import AnimeCard from "./AnimeCard";
import {Component} from "react";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const {anime} = this.props;
    return ( <div className="anime-list">
      {anime.map((anime, index) => (
        <AnimeCard
          key={index}
          name={anime.name}
          image={anime.image}
          />
      ))}
    </div>)
  }
}

// const AnimeList = ({ anime }) => (
//   <div className="anime-list">
//     {anime.map((item, index) => (
//       <AnimeCard key={index} name={item.name} image={item.image} />
//     ))}
//   </div>
// );


export default AnimeList;

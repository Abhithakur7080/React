import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    const {name, image} = this.props
    return <div className="anime-card">
      <img
        src={image}
        alt={name}
        role="img"
      />
      <p>{name}</p>
    </div>;
  }
}

export default AnimeCard;

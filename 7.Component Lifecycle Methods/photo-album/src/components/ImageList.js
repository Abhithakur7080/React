import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  // Lifecycle method to prevent re render of the list if some spaces are present
  shouldComponentUpdate(nextProps) {
    const imagesLength = nextProps.images.length;

    if (nextProps.images.length > 0) {
      const lastImageUrl = nextProps.images[imagesLength - 1];
      if (lastImageUrl.length <= 5 || lastImageUrl.indexOf(" ") >= 0) {
        return false;
      }
    }
    return true;
  }
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}

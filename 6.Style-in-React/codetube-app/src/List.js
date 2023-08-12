import { Component } from "react";
import Course from "./components/Course";
import { courses } from "./data";
import { Container } from "./reusable.styled";

class List extends Component {

  render() {
    const {handleAddToBag, handleRemoveFromBag, isCourseinBag} = this.props;
    return (
      <Container flex="3">
        {courses.map((v) => (
          <Course
            key={v.id}
            video={v}
            isCourseinBag={isCourseinBag}
            onAdd={handleAddToBag}
            onRemove={handleRemoveFromBag}
            isInBag={isCourseinBag(v.id)}
          />
        ))}
      </Container>
    );
  }
}

export default List;

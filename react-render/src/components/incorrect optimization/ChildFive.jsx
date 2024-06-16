import React from "react";

export const ChildFive = ({ name }) => {
  console.log("ChildFive Render");
  return (
    <div>
      {/* Hello {name} {person.fname} {person.lname} */}
      Hello {name}
    </div>
  );
};

export const MemoizedChildFive = React.memo(ChildFive);

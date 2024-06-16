import React from "react";

export const ChildSix = ({ name }) => {
  console.log("ChildSix Render");
  return (
    <div>
      {/* Hello {name} {person.fname} {person.lname} */}
      Hello {name}
    </div>
  );
};

export const MemoizedChildSix = React.memo(ChildSix);

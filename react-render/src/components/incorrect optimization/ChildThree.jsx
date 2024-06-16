import React from 'react'

//no need to wrap component if it have children props(memo not working here)
export const ChildThree = ({children, name}) => {
    console.log("ChildThree Render");
  return (
    <div>{children} {name}</div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)
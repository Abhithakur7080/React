import React from 'react'

const Title = () => {
    console.log("Rendering title");
  return (
    <div>
        useCallback hook
    </div>
  )
}

export default React.memo(Title)
import React, { useEffect, useState } from 'react'

const DocumentTitleOne = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      document.title = `count - ${count}`
    }, [count])
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocumentTitleOne
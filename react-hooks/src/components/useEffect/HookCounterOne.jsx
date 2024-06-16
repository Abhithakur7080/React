import React, { useEffect, useState } from 'react'

const HookCounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")

    // useEffect(() => {
    //     //componentDidMount
    //     //componentDidUpdate
    //     console.log("UseEffect, Updating document title");
    //     document.title = `Clicked ${count} times`
    // })

    //conditionally render not render name here
    useEffect(() => {
        //componentDidMount
        //componentDidUpdate
        console.log("UseEffect, Updating document title");
        document.title = `Clicked ${count} times`
    }, [count])

  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne
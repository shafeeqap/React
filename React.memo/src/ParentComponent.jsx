// Without React.memo()



// import React from 'react'
// import { useState } from 'react'
// import ChildComponent from './ChildComponent'

// export default function ParentComponent() {

//     const [count, setCount] = useState(0)
//     const [value, setValue] = useState('Hello')
//   return (
//     <div>
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setValue('Hello, World')}>Change Value</button>
//         <ChildComponent value={value}/>
//     </div>
//   )
// }


/*
With React.memo()
-----------------
Is a Higher Order Function [HOC] that memoizes a functional component 
preventing it from re-rendering unless its props change.
*/

import React, { useState } from 'react'
import ChildComponent from './ChildComponent';
import CountComponent from './CountComponent';

export default function ParentComponent() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState('Hello');

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setValue('Hello, World')}>Change</button>
        <ChildComponent value={value}/>
        <CountComponent count={count}/>
    </div>
  )
}

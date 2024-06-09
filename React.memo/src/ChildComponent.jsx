// Without React.memo()



// import React from 'react'

// export default function ChildComponent({value}) {

//     console.log('ChildComponent rendered')



//   return (
//     <>
//         <div>{value}</div>
//     </>
//   )
// }


/* With React.memo()
---------------------------------
*/
import React from 'react'

function ChildComponent({value}) {

    console.log('ChildComponent rendered')

  return <div>{value}</div>
}

export default React.memo(ChildComponent);

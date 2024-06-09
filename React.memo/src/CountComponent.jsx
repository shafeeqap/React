import React from 'react'

function CountComponent({count}) {

    console.log('Count Component rendered');

  return (
    <div>Count: {count}</div>
  )
}

export default React.memo(CountComponent)
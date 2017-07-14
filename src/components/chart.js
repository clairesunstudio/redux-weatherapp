import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
//functional component

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  )
}

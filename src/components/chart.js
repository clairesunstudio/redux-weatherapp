import _ from 'lodash'
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
//functional component
const average = data => _.round(_.sum(data)/data.length);

export default (props) => {
  return (
    <div>
      <Sparklines height={150} width={300} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(props.data)}{props.units}</div>
    </div>
  )
}

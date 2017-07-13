import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
  console.log('action:',action)
  //payload got processed through redux-promise middleware and promise (request) from action creator gets unwrapped
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([ action.payload.data ])
      //.concat not mutate state like .push, it creates a new array
      return [ action.payload.data, ...state]
      //Spread in array literals, create a flat new array [city, city, city] instead of [city, [city, city]]
  }
  return state
}

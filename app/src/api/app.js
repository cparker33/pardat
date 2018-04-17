/*********************************
  DEPENDENCIES
*********************************/
import store from '../store/store'

export const callApiFunction = (()=> {
  store.dispatch({
    type: 'ADD_COMP_LVL',
    user_scale: 'score'
  })
})
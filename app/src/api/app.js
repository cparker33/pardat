import store from '../store/store'

export function callApiFunction() {

  store.dispatch({
    type: 'ADD_COMP_LVL',
    user_scale: 'score'
  })
  
}
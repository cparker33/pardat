const init_state = {
  cData: {} 
}

export function app_reducer(state = init_state, action) {

   // console.log(action)

  switch (action.type) {

    case 'GET_DATA':
      return {
        ...state,
        cData: [action.action]
      }
//  ....

    default:
      return state

//  ....
  }
}

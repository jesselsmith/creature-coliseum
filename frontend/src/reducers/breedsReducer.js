export default (state = { breeds: [], loading: true }, action) => {
  switch (action.type) {
    case 'SET_BREEDS':
      return {
        breeds: action.breeds,
        loading: false
      }
    case 'LOADING_BREEDS':
      return{
        ...state,
        loading: true
      }
    default:
    return state
  }
}

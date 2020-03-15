export default (state = { encounters: [], loading: false }, action) => {
  switch (action.type) {
    case 'ADD_ENCOUNTERS':
      return { ...state, encounters: [...state.encounters, ...action.encounters], loading: false }
    case 'ADD_ENCOUNTER':
      return { ...state, encounters: [...state.encounters, action.encounter], loading: false }
    case 'LOADING_ENCOUNTERS':
      return {
        ...state,
        encounters: [...state.encounters],
        loading: true
      }
    default:
      return state
  }
}

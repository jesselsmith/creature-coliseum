export default (state = { encounters: [], monsters: [], players: [], loading: false }, action) => {
  switch (action.type) {
    case 'SET_ENCOUNTERS':
      return {
        encounters: action.encounters,
        monsters: action.monsters,
        players: action.players,
        loading: false
      }
    case 'ADD_ENCOUNTERS':
      return {
        ...state,
        encounters: [...state.encounters, ...action.encounters],
        monsters: [...state.monsters, ...action.monsters],
        players: [...state.players, ...action.players],
        loading: false
      }
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

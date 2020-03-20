export default (state = { encounters: [], monsters: [], players: [], loading: true }, action) => {
  switch (action.type) {
    case 'SET_ENCOUNTERS':
      return {
        encounters: action.encounters,
        monsters: action.monsters,
        players: action.players,
        loading: false
      }
    case 'ADD_ENCOUNTER':
      return { ...state, encounters: [...state.encounters, action.encounter], loading: false }
    case 'LOADING_ENCOUNTERS':
      return {...state, loading: true }
    case 'UPDATE_ENCOUNTER':
      return {...state, encounters: state.encounters.map(encounter => {
        if(encounter.id === action.encounter.id){
          return action.encounter
        }else{
          return encounter
        }
      })}
    case 'ADD_PLAYER':
      return { ...state, players: [...state.players, action.player], loading: false }
    case 'REMOVE_PLAYER':
      return { ...state, players: state.players.filter(player => player.id !== action.playerId), loading: false }
    case 'ADD_MONSTER':
      return { ...state, monsters: [...state.monsters, action.monster], loading: false }
    case 'REMOVE_MONSTER':
      return { ...state, monsters: state.monsters.filter(monster => monster.id !== action.monsterId), loading: false }
    default:
      return state
  }
}

const updateModel = (modelArray, updatedModel) => {
  return modelArray.map(model => {
    if(model.id === updatedModel.id){
      return updatedModel
    }else{
      return model
    }
  })
}

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
      return {...state, encounters: updateModel(state.encounters, action.encounter), loading: false}
    case 'REMOVE_ENCOUNTER':
      return {
        ...state,
        encounters: state.encounters.filter(encounter => encounter.id !== action.encounterId),
        players: state.players.filter(player => !action.playerIds.includes(player.id)),
        monsters: state.monsters.filter(monster => !action.monsterIds.includes(monster.id)),
        loading: false
      }
    case 'ADD_PLAYER':
      return { 
        ...state, 
        players: [...state.players, action.player],
        encounters: updateModel(state.encounters, action.encounter),
        loading: false 
      }
    case 'UPDATE_PLAYER':
      return { 
        ...state, 
        players: updateModel(state.players, action.player),
        encounters: updateModel(state.encounters, action.encounter),
        loading: false 
      }
    case 'REMOVE_PLAYER':
      return { 
        ...state, 
        players: state.players.filter(player => player.id !== action.playerId),
        encounters: updateModel(state.encounters, action.encounter),
        loading: false }
    case 'ADD_MONSTER':
      return { 
        ...state,
        monsters: [...state.monsters, action.monster], 
        encounters: updateModel(state.encounters, action.encounter),
        loading: false }
    case 'UPDATE_MONSTER':
      return { 
        ...state, 
        monsters: updateModel(state.monsters, action.monster),
        encounters: updateModel(state.encounters, action.encounter),
        loading: false 
      }
    case 'REMOVE_MONSTER':
      return { 
        ...state, 
        monsters: state.monsters.filter(monster => monster.id !== action.monsterId),
        encounters: updateModel(state.encounters, action.encounter),
        loading: false 
      }
    default:
      return state
  }
}

const BASE_URL = 'http://localhost:3001/'

export const fetchEncounters = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ENCOUNTERS' })
    fetch(BASE_URL + 'encounters').then(resp => resp.json())
      .then(json => {
        const firstPlayer = json.included.findIndex(obj => obj.type === 'player')
        dispatch({ type: 'SET_ENCOUNTERS', encounters: json.data, monsters: json.included.slice(0, firstPlayer), players: json.included.slice(firstPlayer) })
      })
  }
}

export const postEncounter = encounter => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(encounter)
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_ENCOUNTERS' })
    fetch(BASE_URL + 'encounters', options).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_ENCOUNTER', encounter: json.data })
      })
  }
}
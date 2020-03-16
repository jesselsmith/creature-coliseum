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

export const postPlayer = player => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(player)
  }
  return (dispatch) => {
    fetch(`${BASE_URL}players/`, options).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_PLAYER', player: json.data })
      })
  }
}

export const postMonster = monster => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(monster)
  }
  return (dispatch) => {
    fetch(`${BASE_URL}monsters/`, options).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_MONSTER', monster: json.data })
      })
  }
}
const BASE_URL = 'http://localhost:3001/'

export const fetchEncounters = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ENCOUNTERS' })
    fetch(BASE_URL + 'encounters').then(resp => resp.json())
      .then(json => {
        const monsters = []
        const players = []
        json.included.forEach(element => {
          if (element.type === 'monster') {
            monsters.push(element)
          } else {
            players.push(element)
          }
        });
        dispatch({ type: 'SET_ENCOUNTERS', encounters: json.data, monsters: monsters, players: players })
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
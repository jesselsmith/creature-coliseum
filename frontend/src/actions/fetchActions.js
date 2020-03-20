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

const postOptionMaker = model => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(model)
  }
}

const DELETE_OPTIONS = {
  method: "DELETE",
  headers: {
    "Accept": "application/json"
  } 
}

export const postEncounter = encounter => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ENCOUNTERS' })
    fetch(BASE_URL + 'encounters', postOptionMaker(encounter)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_ENCOUNTER', encounter: json.data })
      })
  }
}

const getRelationshipIds = (modelJson, relationship) => {
  return modelJson.data.relationships[relationship].data.map(rel => rel.id)
}

export const deleteEncounter = encounterId => {
  return dispatch => {
    fetch(BASE_URL + 'encounters/' + encounterId, DELETE_OPTIONS).then(resp => resp.json())
    .then(json => {
      dispatch({ 
        type: 'REMOVE_ENCOUNTER', 
        encounterId: encounterId, 
        playerIds: getRelationshipIds(json, 'players'), 
        monsterIds: getRelationshipIds(json, 'monsters')
      })
    })
  }
}

const fetchEncounter = (dispatch, encounterId) => {
  return fetch(`${BASE_URL}encounters/${encounterId}`)
        .then(resp => resp.json())
        .then(json => {
          dispatch({ 
            type: 'UPDATE_ENCOUNTER', 
            encounter: json.data
          })
        })
}

export const postPlayer = player => {
  return (dispatch) => {
    fetch(`${BASE_URL}players/`, postOptionMaker(player)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_PLAYER', player: json.data, encounter: json.included[0] })
      })
  }
}

export const deletePlayer = playerId => {
  return dispatch => {
    fetch(`${BASE_URL}players/${playerId}`)
  }
}

export const postMonster = monster => {
  return (dispatch) => {
    fetch(`${BASE_URL}monsters/`, postOptionMaker(monster)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_MONSTER', monster: json.data, encounter: json.included[0] })
      })
  }
}
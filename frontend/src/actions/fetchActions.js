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

const optionMaker = (model, method = 'POST') => {
  return {
    method: method,
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
    fetch(BASE_URL + 'encounters', optionMaker(encounter)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_ENCOUNTER', encounter: json.data })
      })
  }
}

export const patchEncounter = encounter => {
  return dispatch => {
    fetch(`${BASE_URL}encounters/${encounter.id}`, optionMaker(encounter, 'PATCH')).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_ENCOUNTER', encounter: json.data })
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
    fetch(`${BASE_URL}players/`, optionMaker(player)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_PLAYER', player: json.data, encounter: json.included[0] })
      })
  }
}

export const patchPlayer = player => {
  return dispatch => {
    fetch(`${BASE_URL}players/${player.id}`, optionMaker(player, 'PATCH')).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_PLAYER', player: json.data, encounter: json.included[0] })
    })
  }
}

export const deletePlayer = playerId => {
  return dispatch => {
    fetch(`${BASE_URL}players/${playerId}`, DELETE_OPTIONS).then(resp => resp.json()
    .then(json => {
      dispatch({type: 'REMOVE_PLAYER', playerId: playerId, encounter: json.included[0]})
    }))
  }
}

export const postMonster = monster => {
  return (dispatch) => {
    fetch(`${BASE_URL}monsters/`, optionMaker(monster)).then(resp => resp.json())
      .then(json => {
        dispatch({ type: 'ADD_MONSTER', monster: json.data, encounter: json.included[0] })
      })
  }
}

export const patchMonster = monster => {
  return dispatch => {
    fetch(`${BASE_URL}monsters/${monster.id}`, optionMaker(monster, 'PATCH')).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_MONSTER', monster: json.data, encounter: json.included[0] })
    })
  }
}

export const deleteMonster = monsterId => {
  return dispatch => {
    fetch(`${BASE_URL}monsters/${monsterId}`, DELETE_OPTIONS).then(resp => resp.json()
    .then(json => {
      dispatch({type: 'REMOVE_MONSTER', monsterId: monsterId, encounter: json.included[0]})
    }))
  }
}
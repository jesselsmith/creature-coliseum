const BREED_URL = 'http://localhost:3001/breeds'


const OPTIONS = {

}

const queryString = require('querystring')


export const fetchBreeds = (searchHash = null) => {
  debugger
  let url = BREED_URL
  if(searchHash !== null){
    url += '?' + queryString(searchHash)
  }
  return dispatch => {
    dispatch({ type: 'LOADING_BREEDS' })
    fetch(url).then(resp => resp.json())
    .then(json => dispatch({type: 'SET_BREEDS', breeds: json.data}))
  }
}
const BREED_URL = 'http://localhost:3001/breeds'


const OPTIONS = {

}

const queryString = require('querystring')


export const fetchBreeds = (searchHash = null) => {
  let url = BREED_URL
  if(searchHash !== null){
    url += '?' + queryString.stringify(searchHash)
  }
  return dispatch => {
    dispatch({ type: 'LOADING_BREEDS' })
    fetch(url).then(resp => resp.json())
    .then(json => {
      return dispatch({type: 'SET_BREEDS', breeds: json.data})
    })
  }
}
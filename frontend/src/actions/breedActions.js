const BREED_URL = 'http://localhost:3001/breeds'

const OPTIONS = {

}


export const fetchBreeds = (searchHash = null) => {
  return dispatch => {
    url = BREED_URL
    if(searchHash !== null){
      
    }
    fetch(BREED_URL)
  }
}
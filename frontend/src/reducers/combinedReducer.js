import { combineReducers } from 'redux';
import data from './encountersReducer'
import breeds from './breedsReducer'

export default combineReducers({
  data,
  breeds
})
import {combineReducers} from 'redux';

import mealsReducer from './meals';

const rootReducers = combineReducers({
  meals: mealsReducer,
});

export default rootReducers;

import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

export const rootReducer = combineReducers({
    movieList: movieReducer,
    
})

export default movieReducer;
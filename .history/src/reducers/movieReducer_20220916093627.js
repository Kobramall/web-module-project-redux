import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

export const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database",
}

const reducer = (state, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
            case ADD_MOVIE:
                return{
                    ...state,
                    moive: action.payload
                }
            case HIDE_FAVORTIES:
                return{
                    ...state,
                    favorites: false
                }
            case SHOW_FAVORITES:
                return{
                    ...state,
                    favorites: true
                }
        default:
            return state;
    }
}

export default reducer;
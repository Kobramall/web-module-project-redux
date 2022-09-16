import { ADD_MOVIE, DELETE_MOVIE, SHOW_FAVORITES, HIDE_FAVORTIES } from '../actions/movieActions.js';
import movies from './../data.js';

export const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database",
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
            case ADD_MOVIE:
                return{
                    ...state,
                    moives: action.payload
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
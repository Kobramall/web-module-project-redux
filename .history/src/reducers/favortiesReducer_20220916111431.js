
const initialState = {
    favorites: [{movie: "star"}],
    displayFavorites: true
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVE_FAVORITE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
            case ADD_FAVORITE:
               const newFavorite ={
                ...action.payload,
                id: Date.now()
               }
            return{
                    ...state,
                    favorites: [...state.favorites, newFavorite]
                }
                case TOGGLE_FAVORITES:
            return {
                ...state,
               
            }
                
          
        default:
            return state;
    }
}

export default favoriteReducer;
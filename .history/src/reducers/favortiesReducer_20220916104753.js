


const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case HIDE_FAVMOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
            case ADD_FAVMOVIE:
               const newFavorite ={
                ...action.payload,
                id: Date.now()
               }
            return{
                    ...state,
                    favorite: [...state.favorite, newFavorite]
                }
          
        default:
            return state;
    }
}
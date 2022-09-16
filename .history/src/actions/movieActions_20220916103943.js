export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const HIDE_FAVORTIES = "HIDE_FAVORTIES"
export const SHOW_FAVORITES = "SHOW_FAVORITES"

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) =>{
  return({type:ADD_MOVIE, payload:movie})
}


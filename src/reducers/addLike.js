const addLike = (state = { likedGifs: []}, action) => {
  switch(action.type){
    case 'ADDLIKE':
      console.log(state);
      if(state.likedGifs.length < 5) {
        return {
          ...state,
            likedGifs: [...state.likedGifs, {weirdness: action.payload}]
        }
      }
      else{
        return{
          ...state,
            likedGifs: [...state.likedGifs.fill({weirdness: 2}, -1)]
        }
      }
      
    default:
      return {...state};
  }
}

export default addLike;
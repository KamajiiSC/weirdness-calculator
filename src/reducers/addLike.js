// Initializes state as an object with likedGifs equals empty array
const addLike = (state = { likedGifs: []}, action) => {
  switch(action.type){
    case 'ADDLIKE':
      // Logs state, NOTE logs before state is changed
      console.log(state);

      // If the likedGifs array is empty return previous state but replace likedGifs with a copy of the old one but add an object to the array first
      if(state.likedGifs.length < 5) {
        return {
          ...state,
            likedGifs: [...state.likedGifs, {weirdness: action.payload}]
        }
      }
      
      // If you already have 5 items then replace the last item with an object
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
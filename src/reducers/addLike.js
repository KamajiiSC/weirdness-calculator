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
            likedGifs: [...state.likedGifs, {url: action.payloadUrl, weirdness: action.payloadWeird, name: action.payloadName}]
        }
      }

      // If you already have 5 items then replace the last item with an object
      else{
        return{
          ...state,
            likedGifs: [...state.likedGifs.fill({url: action.payloadUrl, weirdness: action.payloadWeird, name: action.payloadName}, -1)]
        }
      }
    case 'EMPTYLIKE':
      return {
          likedGifs: []
      }
      
    default:
      return {...state};
  }
}

export default addLike;
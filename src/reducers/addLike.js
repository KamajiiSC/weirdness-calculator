const addLike = (state = [{"weirdness": 0}, {"weirdness": 0}, {"weirdness": 0}, {"weirdness": 0}, {"weirdness": 0}], action) => {
  switch(action.type){
    case 'ADDLIKE':
      {
        const newState = { ...state };
        newState.contents = 
        [
          newState.contents[0],
          {"weirdness": action.payload}
        ];
        return newState;
      } 
  }
}

export default addLike;
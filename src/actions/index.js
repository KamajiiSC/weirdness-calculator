export const addLike = (url, weird, name) => {
  return {
    type: "ADDLIKE",
    payloadUrl: url,
    payloadWeird: weird,
    payloadName: name,
  }
} 

export const emptyLike = () => {
  return {
    type: "EMPTYLIKE"
  }
}

export const removeLike = (index) => {
  return{
    type: "REMOVELIKE",
    payloadIndex: index
  }
}
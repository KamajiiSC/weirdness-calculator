export const addLike = (newItem) => {
  return {
    type: "ADDLIKE",
    payloadUrl: newItem
  }
} 
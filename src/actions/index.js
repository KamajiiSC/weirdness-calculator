export const addLike = (url, weird) => {
  return {
    type: "ADDLIKE",
    payloadUrl: url,
    payloadWeird: weird
  }
} 
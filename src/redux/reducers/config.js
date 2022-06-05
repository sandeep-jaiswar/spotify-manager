import TYPE from "../types";

let initialStore = {
  deviceDetails: [],
  userDetails:[],
}

export default function config(state = initialStore, action) {
  const { type, payload} = action;
  switch (type) {
    case TYPE.SET_DEVICE_DETAILS:
      return {
        ...state,
        deviceDetails: payload,
      }
    case TYPE.SET_USER_DETAILS:
      return {
        ...state,
        userDetails:payload,
      }
    default:
      return initialStore
  }
}
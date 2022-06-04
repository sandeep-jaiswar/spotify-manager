import TYPE from "../types";

let initialStore = {
  deviceDetails:[]
}

export default function config(state = initialStore, action) {
  const { type, payload} = action;
  switch (type) {
    case TYPE.SET_DEVICE_DETAILS:
      return {
        ...state,
        deviceDetails: payload,
      }
    default:
      return initialStore
  }
}
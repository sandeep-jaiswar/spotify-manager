import TYPE from "../types"

export const setDeviceDetails = payload => {
  return {
    type: TYPE.SET_DEVICE_DETAILS,
    payload,
  }
}
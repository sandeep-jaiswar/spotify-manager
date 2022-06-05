import TYPE from "../types"

export const setDeviceDetails = payload => {
  return {
    type: TYPE.SET_DEVICE_DETAILS,
    payload,
  }
};

export const userDetails = (payload) => {
  return {
    type: TYPE.SET_USER_DETAILS,
    payload,
  }
}
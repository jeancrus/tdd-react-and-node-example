export function addTech(tech) {
  return {
    type: "ADD_TECH",
    payload: { tech }
  };
}

export function getTechsSuccess(data) {
  return {
    type: "@techs/GET_TECHS_SUCCESS",
    payload: { data }
  };
}
export function getTechsFailure() {
  return {
    type: "@techs/GET_TECHS_FAILURE"
  };
}

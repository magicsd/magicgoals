import { SIGNED_IN, SET_GOALS } from '../constants'

export function logUser(email) {
  return {
    type: SIGNED_IN,
    payload: {
      email
    }
  }
}
export function setGoals(goals) {
  return {
    type: SET_GOALS,
    payload: {
      goals
    }
  }
}

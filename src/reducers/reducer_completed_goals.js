import { SET_COMPLETED } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_COMPLETED:
      const {completeGoals} = action.payload;
      return completeGoals;
    default:
      return state;
  }
}

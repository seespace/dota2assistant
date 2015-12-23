import { createAction, handleActions } from 'redux-actions';
import { ActionCreators } from 'redux-undo';

// ------------------------------------
// Constants
// ------------------------------------
export const FIRST_PICK_TOGGLE = 'FIRST_PICK_TOGGLE';

// ------------------------------------
// Actions
// ------------------------------------
export const togglePick = createAction(FIRST_PICK_TOGGLE);
export const undo = createAction(ActionCreators.undo().type);
export const redo = createAction(ActionCreators.redo().type);

export const actions = {
  togglePick,
  undo,
  redo
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [FIRST_PICK_TOGGLE]: (state) => {
    return { ...state, firstPick: !state.firstPick };
  }
}, {
  firstPick: true
});

import { createSelector } from "reselect";
import { State } from "../../types";

const selectUserState = (state: State) => state.user

export const selectUser = createSelector(
  selectUserState,
  (user) => user.user
)

export const selectIsAuthenticated = createSelector(
  selectUserState,
  (user) => user.isAuthentificated
)
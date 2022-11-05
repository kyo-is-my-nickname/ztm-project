import { createSelector } from "reselect"
import { RootReducer } from "../store"
import { UserState } from "./user.reducer"
export const selectUserSelector=(state: RootReducer): UserState => state.user

export const selectCurrentUser=createSelector(
    selectUserSelector,
    (user)=> user.currentUser)
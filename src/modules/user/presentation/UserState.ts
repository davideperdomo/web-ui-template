export enum UserStateKind {
  LoadingUserState,
  UpdatedUserState,
  ErrorUserState
}

export interface CommonUserState {
  open: boolean;
}

export interface LoadingUserState {
  kind: UserStateKind.LoadingUserState
}

export interface UpdatedUserState {
  kind: UserStateKind.UpdatedUserState
  id: string;
  name: string;
  email: string;
}

export interface ErrorUserState {
  kind: UserStateKind.ErrorUserState;
  error: string;
}

export type UserState = (LoadingUserState | UpdatedUserState| ErrorUserState) & CommonUserState;

export const userInitialState: UserState = {
  kind: UserStateKind.LoadingUserState,
  open: false,
};
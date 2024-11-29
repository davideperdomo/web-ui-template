"use client"
import React from "react";
import UserInfo from "./UserInfo";
import { useBlocState } from "@ui/shared/useBlocState";
import { useUserBloc } from "../hooks/useUserBloc";
import { UserStateKind } from "@modules/user/presentation/UserState";

const UserView: React.FC = () => {
  const state = useBlocState(useUserBloc());

  if (state.kind === UserStateKind.LoadingUserState) return <p>Cargando...</p>;
  if (state.kind === UserStateKind.ErrorUserState) return <p>Error: {state.error}</p>;
  if (state.kind === UserStateKind.UpdatedUserState) return <UserInfo name={state.name} email={state.email} /> 
  
  return <p>Usuario no encontrado</p>;
};

export default UserView;

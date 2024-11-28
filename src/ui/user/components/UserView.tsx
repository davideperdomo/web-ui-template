"use client"
//import { useUser } from "@modules/user/presentation/useUser";
import React from "react";
import UserInfo from "./UserInfo";
import { usePlocState } from "@ui/shared/usePlocState";
import { useUserPloc } from "../hooks/useUserBloc";
import { UserStateKind } from "@modules/user/presentation/UserState";

const UserView: React.FC = () => {
  /* With custom hooks
  const { user, isLoading, error } = useUser();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return user ? <UserInfo name={user.name} email={user.email} /> : <p>Usuario no encontrado</p>;
  */  
  const state = usePlocState(useUserPloc());
  console.log('view',{ state })

  if (state.kind === UserStateKind.LoadingUserState) return <p>Cargando...</p>;
  if (state.kind === UserStateKind.ErrorUserState) return <p>Error: {state.error}</p>;
  if (state.kind === UserStateKind.UpdatedUserState) return <UserInfo name={state.name} email={state.email} /> 
  
  return <p>Usuario no encontrado</p>;
};

export default UserView;

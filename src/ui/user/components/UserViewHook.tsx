"use client"
import { useUser } from "@ui/user/hooks/useUserHook";
import React from "react";
import UserInfo from "./UserInfo";

const UserView: React.FC = () => {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return user ? <UserInfo name={user.name} email={user.email} /> : <p>Usuario no encontrado</p>;
};

export default UserView;

"use client"
import { UserBloc } from "@modules/user/presentation/User.bloc";
import { createContext } from "@ui/shared/createContext";

const [plocContext, usePloc] = createContext<UserBloc>();

export const useUserPloc = usePloc;

export const userBlocContext = plocContext;
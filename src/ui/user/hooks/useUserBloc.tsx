"use client"
import { UserBloc } from "@modules/user/presentation/User.bloc";
import { createContext } from "@ui/shared/createContext";

const [blocContext, useBloc] = createContext<UserBloc>();

/**
 * Using React Context to map the BLoC state to React Components 
 */
export const useUserBloc = useBloc;

export const userBlocContext = blocContext;

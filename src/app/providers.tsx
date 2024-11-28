"use client"
import { DependenciesContainer } from '@modules/shared/dependencies/DependenciesContainer';
import {NextUIProvider} from '@nextui-org/react';
import { userBlocContext } from '@ui/user/hooks/useUserBloc'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <userBlocContext.Provider value={DependenciesContainer.getUserPloc()}>
        {children}
      </userBlocContext.Provider>
    </NextUIProvider>
  )
}
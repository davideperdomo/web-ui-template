import Bloc from "@modules/shared/presentation/Bloc"
import { userInitialState, UserState, UserStateKind } from "./UserState";
import { GetUser } from "../application/GetUser.useCase";

export class UserBloc extends Bloc<UserState>{
  constructor(private getUser: GetUser){
    super(userInitialState);
    this.loadUser();
  }

  async loadUser() {
    try {
      const user = await this.getUser.execute();
      
      this.changeState({
        kind: UserStateKind.UpdatedUserState,
        open: true,
        id: user.uid,
        email: user.email,
        name: user.name,
      })
    } catch(_) {
      this.changeState({
        kind: UserStateKind.ErrorUserState,
        open: false,
        error: 'Fetch user error',
      })
    }
    
  }
}
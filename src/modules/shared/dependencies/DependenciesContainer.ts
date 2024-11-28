import { GetUser } from "@modules/user/application/GetUser.useCase";
import { MockUserRepository } from "@modules/user/infrastructure/MockUser.repository"
import { UserBloc } from "@modules/user/presentation/User.bloc";

export class DependenciesContainer {
  static getUserPloc(): UserBloc {
    const repository = new MockUserRepository();
    const getUser = new GetUser(repository);
    
    return new UserBloc(getUser);
  }
}
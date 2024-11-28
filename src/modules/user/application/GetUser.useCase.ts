import { User } from "../domain/User.entity";
import { UserRepository } from "../domain/User.repository";

export class GetUser {
  constructor(private readonly repository: UserRepository){}

  async execute(): Promise<User> {
    return await this.repository.getUser();
  }
}

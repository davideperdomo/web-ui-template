import { User } from "./User.entity";

export interface UserRepository {
  getUser(): Promise<User>;
}

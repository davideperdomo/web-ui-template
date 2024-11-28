import { UserRepository } from "../domain/User.repository";
import { User } from "../domain/User.entity";

export class MockUserRepository implements UserRepository {
  async getUser(): Promise<User> {
    console.log('infra');
    const user = await new Promise((resolve) => {
      setTimeout(()=>{
        resolve(new User("userid_01", "John Doe", "john.doe@example.com", "STUDENT"));
      }, 10)
    });

    return user as User;
  }
}

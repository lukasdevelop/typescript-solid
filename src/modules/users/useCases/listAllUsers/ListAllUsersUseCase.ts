/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    
    const user = this.usersRepository.findById(user_id)

    const userAdmin = this.usersRepository.turnAdmin(user)

    if(!userAdmin){
      throw new Error("User received not is admin.")
    }

    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };

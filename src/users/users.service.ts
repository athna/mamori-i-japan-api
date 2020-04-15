import { Injectable } from '@nestjs/common'
import { UsersRepository } from './users.repository'
import { CreateUserDto } from './dto/create-user.dto'

export type User = any

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  create(user: CreateUserDto) {
    return this.usersRepository.createOne(user)
  }

  async findOne(userId: string): Promise<User | undefined> {
    return this.usersRepository.findOne(userId)
  }
}
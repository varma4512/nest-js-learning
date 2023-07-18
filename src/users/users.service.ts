import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 0,
      name: 'bhavin',
    },
    {
      id: 1,
      name: 'bhommit',
    },
  ];

  getUsers(name: string) {
    if (name) this.users.filter((data) => data.name === name);
    return this.users;
  }
  getOneUser(id: number) {
    if (id) this.users.find((data) => data.id === id);
    return {};
  }
}

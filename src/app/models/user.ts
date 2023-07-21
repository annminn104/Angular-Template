import { IUser } from '@interfaces/user';

export class User {
  level: string;
  username: string;

  constructor(user: IUser) {
    this.level = user.level;
    this.username = user.username;
  }
}

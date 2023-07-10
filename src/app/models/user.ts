import { IUser } from '@interfaces/user';

export class User {
  userId: number;
  userName: string;
  fullName: string;
  email: string;
  phone: string;

  constructor(user: IUser) {
    this.userId = user.id ?? user.userId;
    this.userName = user.userName;
    this.fullName = user.fullName;
    this.email = user.email;
    this.phone = user.phone;
  }
}

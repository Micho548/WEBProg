import { Role } from './role';

export interface User {
   id: number;
   userName: string;
   lastName: string;
   password: string;
   role: Role;
   phone: number;
   token?: string;
}

export const USER_LIST: User[] = [
   {
      id: 1,
      userName: 'Pedrito',
      lastName: 'gonzales',
      password: 'abc123',
      role:  Role.User,
      phone: 4257896,
   },
   {
      id: 2,
      userName: 'Ytai',
      lastName: 'gonzales',
      password: 'abc123',
      role: Role.User,
      phone: 4257896,
   },
   {
      id: 3,
      userName: 'Eynar',
      lastName: 'gonzales',
      password: 'abc123',
      role: Role.User,
      phone: 4257896,
   },
   {
      id: 4,
      userName: 'Micho',
      lastName: 'Balducas',
      password: 'control123',
      role: Role.Admin,
      phone: 4257896,
   }
];

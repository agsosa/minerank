import { IUser } from '../entities/Iuser';

type CreateUserProperties = 'username' | 'password' | 'email';

export type ICreateUserDto = Pick<IUser, CreateUserProperties>;

export type IUpdateUserDto = Partial<ICreateUserDto>;

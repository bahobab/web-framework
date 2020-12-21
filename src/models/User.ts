import { Model } from './Model';

const rootUrl = 'http://localhost:3000/users';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export class User extends Model<UserProps>{
    
}
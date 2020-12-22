import { UserCollection } from './models/UserCollection';
import { User, UserProps } from './models/User';

const collection = new UserCollection<User, UserProps>(
  'http://localhost:3000/users',
(json: UserProps) => User.buildUser(json)
);

collection.on("change", () => console.log('Collection changed...', collection));

collection.fetch();
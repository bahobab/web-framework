import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({name: 'Polo', age: 22})

const rootElement = document.querySelector('#root');

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();

  // console.log(userEdit);
} else {
  throw new Error('Root Element Does not Exist');
}

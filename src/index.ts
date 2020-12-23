import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({name: 'Polo', age: 22})

const rootElement = document.querySelector('#root');

if (rootElement) {
  const userForm = new UserForm(rootElement, user);
  userForm.render();
}

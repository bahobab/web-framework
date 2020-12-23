import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({name: 'Polo', age: 22})
const userForm = new UserForm(document.querySelector('#root'), user);

userForm.render();
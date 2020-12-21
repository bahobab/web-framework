import { User } from './models/User';

const user = User.buildUser({ id: 3 });

user.set({ name: 'Yapi Yapo' });

user.on('save', () => console.log(user));
// user.set({ name: 'Polo' })

user.save();


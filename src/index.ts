import { User } from './models/User';

const user = new User({ id: 3 });

user.set({ name: 'Poloo' });

user.on('save', () => console.log(user));
// user.set({ name: 'Polo' })

user.save();


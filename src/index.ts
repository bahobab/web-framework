import { User } from './models/User';

const polo = new User({name: 'Polo', age: 33});

polo.set({ age: 55 });

polo.on("change", () => console.log('yo'))
polo.on("change", () => console.log('yo yo'))

console.log(polo);
import { User } from './models/User';

const polo = new User({name: 'Polo', age: 33});

polo.set({age: 55});

console.log(polo.get('name'));
console.log(polo.get('age'));
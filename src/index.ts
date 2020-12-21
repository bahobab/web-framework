import { User } from './models/User';

const mamadou = new User({ name: 'Mamadou', age: 30 });

console.log(mamadou.get('name'));

mamadou.on('change', () => console.log('Hey! Change?'));
mamadou.trigger('change');
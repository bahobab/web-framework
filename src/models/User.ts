import axios, {AxiosResponse} from 'axios';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: {[key:string]:Callback[]} = {};

  constructor(private data: UserProps) {}

  get(propName:string): UserProps {
    return this.data[propName];
  }

  set(userProps: UserProps): void {
    Object.assign(this.data, userProps);
  }

  on(eventName: string, callback: Callback): void {
    const eventHandlers = this.events[eventName] || [];
    eventHandlers.push(callback);
    this.events[eventName] = eventHandlers;
  }

  trigger(eventName: string): void {
    if (!this.events[eventName] || this.events[eventName].length === 0) {
      return;
    }

    this.events[eventName].forEach(callback => {
      callback();
    })
  }

  fetch():void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data)
    })
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      // user exists, update user
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      // create new user
      axios.post('http://localhost:3000/users', this.data)
    }
  }
}
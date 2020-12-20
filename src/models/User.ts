import axios, {AxiosResponse} from 'axios';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export class User {

  constructor(private data: UserProps) {}

  get(propName:string): UserProps {
    return this.data[propName];
  }

  set(userProps: UserProps): void {
    Object.assign(this.data, userProps);
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
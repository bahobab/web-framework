import axios, {AxiosPromise} from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor (public rootUrl: string) { };

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): AxiosPromise {
    const {id} = data;

    if (id) {
      // user exists, update user
      return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      // create new user
      return axios.post(this.rootUrl, data)
    }
  }
}
import { AxiosResponse } from 'axios';

import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

const rootUrl = 'http://localhost:3000/users';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributtes: Attributes<UserProps>;

  constructor (attrs: UserProps) {
    this.attributtes = new Attributes(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributtes.get;
  }

  set(update: UserProps) {
    this.attributtes.set(update);
    this.events.trigger('change');
  }

}
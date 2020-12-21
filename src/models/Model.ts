import { AxiosPromise, AxiosResponse } from 'axios';

interface HasId {
  id?: number;
}
interface ModelAttributes<T>{
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Events {
  on(eventname: string, callback: () => void): void;
  trigger(eventName: string): void;
 }
interface Sync<T>{
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
export class Model<T extends HasId> {
  constructor (
    private attributtes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributtes.get;
  }

  set(update: T) {
    this.attributtes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    })
  }

  save(): void {
    this.sync.save(this.attributtes.getAll()).then((response: AxiosResponse): void => {
      this.events.trigger('save');
    }).catch(() => this.events.trigger('error'))
  }
}
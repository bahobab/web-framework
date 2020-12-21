import { AxiosPromise } from 'axios';

interface Attributes<T>{
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

export class Model {}
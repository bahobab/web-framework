interface UserProps {
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
}
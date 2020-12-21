type Callback = () => void;

export class Eventing {
  events: {[key:string]:Callback[]} = {};

  on = (eventName: string, callback: Callback): void => {
    const eventHandlers = this.events[eventName] || [];
    eventHandlers.push(callback);
    this.events[eventName] = eventHandlers;
  }

  trigger = (eventName: string): void => {
    if (!this.events[eventName] || this.events[eventName].length === 0) {
      return;
    }

    this.events[eventName].forEach(callback => {
      callback();
    })
  }
}
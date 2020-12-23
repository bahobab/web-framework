import { User } from '../models/User';

export class UserForm {
  constructor(
    public parent: Element,
    public user: User
    ) {};

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onH1Hover
    };
  }

  bindEvents(fragment: DocumentFragment):void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  onH1Hover(): void {
    console.log('H1 was hovered over');
  }

  onButtonClick(): void {
    console.log('button clicked!')
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>
        User Name: ${this.user.get('name')}
        </div>
        <div>
        User Age: ${this.user.get('age')}
        </div>
        <input />
        <button>Click Me</button>
      </div>
    `
  };

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }

}
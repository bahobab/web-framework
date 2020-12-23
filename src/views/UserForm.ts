import { User } from '../models/User';

export class UserForm {
  constructor(
    public parent: Element,
    public user: User
    ) {
      this.user.on('change', this.render);
    };

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:#set-age': this.setAgeClick,
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

  setAgeClick = (): void => {
    this.user.setRandomAge()
    console.log(this.user);
    // console.log('set random age');
  }

  onH1Hover(): void {
    console.log('H1 was hovered over');
  }

  onButtonClick(): void {
    console.log('button clicked!')
  }

  

  template = (): string => {
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
        <button id="set-age">Set Random Age</button>
        <button>Click Me</button>
      </div>
    `
  };

  render = (): void  => {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }

}
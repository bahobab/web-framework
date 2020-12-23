import { User } from '../models/User';

export abstract class View {
  constructor(
    public parent: Element,
    public user: User
    ) {
      this.bindModel();
    };
    
    bindModel = (): void => {
    this.user.on('change', this.render);
  }

  abstract eventsMap(): {[key: string]: () => void};
  abstract template(): string;

  bindEvents(fragment: DocumentFragment):void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  render = (): void  => {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }

}
import { View } from './View';
import { User, UserProps } from '../models/User';
export class UserForm extends View<User, UserProps> {

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.setAgeClick,
      'click:.set-name': this.setNameClick,
    };
  }

  setNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      this.model.set({name: input.value});
    }
  }

  setAgeClick = (): void => {
    this.model.setRandomAge()
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
        User Name: ${this.model.get('name')}
        </div>
        <div>
        User Age: ${this.model.get('age')}
        </div>
        <label>Name: <input/></label>
        <button class="set-name">Click Me</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `
  };

  
}
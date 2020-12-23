import { View } from './View';
import { User, UserProps } from '../models/User';
export class UserForm extends View<User, UserProps> {

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.setAgeClick,
      'click:.set-name': this.setNameClick,
      'click:.save-model': this.onSaveModelClick,
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

  onSaveModelClick = (): void => {
    this.model.save();
    // console.log(this.model);
  }

  template = (): string => {
    return `
      <div>
        <label>Name: <input placeholder="${this.model.get('name')}"/></label>
        <div>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
        </div>
      </div>
    `
  };

  
}
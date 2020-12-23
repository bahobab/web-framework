import { View } from './View';
export class UserForm extends View {
  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.setAgeClick,
      'click:.set-name': this.setNameClick,
    };
  }

  setNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      this.user.set({name: input.value});
    }
  }

  setAgeClick = (): void => {
    this.user.setRandomAge()
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
        <label>Name: <input/></label>
        <button class="set-name">Click Me</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `
  };

  
}
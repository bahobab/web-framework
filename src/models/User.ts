interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(userProp:string): UserProps {
    return this.data[userProp];
  }

  set(userProps: UserProps): void {
    Object.assign(this.data, userProps);
  }
}
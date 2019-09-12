export class CityFilter {
  name: string;
  checked: boolean;

  constructor(name: string) {
    this.name = name;
    this.checked = false;
  }
}

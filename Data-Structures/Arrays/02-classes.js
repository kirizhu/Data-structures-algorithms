//An instantiation pattern in JavaScript is a way to create an object using functions.The ES6 Instantiation pattern uses the keyword ‘class’ instead of making the object using a regular function though.
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    console.log('Player', this);
  }
  introduce() {
    console.log(`Hi I am ${this.name}, Im a ${this.type}`);
  }
}
//Whenever you extend a class you want to pass the properties to the parent class using the super function
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('Wizard', this);
  }
  play() {
    console.log(`Wee Im a ${this.type}`);
  }
}

const wizard0 = new Wizard('Nano', 'Healer');
//const wizard1 = new Wizard('Eddy', 'Dark Mage');

class Animal {
	constructor(name){
		this.speed = 0;
		this.name = name;
	}
	run(speed) {
		this.speed += speed;
		console.log(`${this.name} runs with speed ${this.speed}.`);
	}
	stop() {
		this.speed = 0;
		console.log(`${this.name} stopped.`);
	}
};

let animal = new Animal("My animal");

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}

	bark() {
		console.log('woof!');
	}

	getBreed() {
		console.log(`${this.breed}`);
	}
};

let dog = new Dog('Rascoe', 'Golden Retrever');

dog.bark();
dog.getBreed();
dog.run(5);
dog.stop();
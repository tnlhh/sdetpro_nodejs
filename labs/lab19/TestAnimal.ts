import Animal from "./Animal";
import AnimalController from "./AnimalController";
import { Dog } from "./Dog";
import { Horse } from "./Horse";
import { Tiger } from "./Tiger";



let animalController: AnimalController = new AnimalController();
let dog: Animal = new Dog();
let horse: Animal = new Horse();
let tiger: Animal = new Tiger();

let fastestAnimal = animalController.getFastestAnimal([dog, horse, tiger]);

console.log(`The winner is ${fastestAnimal.getName()} with speed: ${fastestAnimal.getSpeed()}`);

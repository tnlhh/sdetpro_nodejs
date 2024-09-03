import Animal from "./Animal";


export default class AnimalController {

    getFastestAnimal(animalList: Animal[]) {

        let tempWinner = animalList[0];

        animalList.forEach(animal => {
            tempWinner =  animal.getSpeed() > tempWinner.getSpeed() ? animal : tempWinner;
        });

        return tempWinner;
    }
}
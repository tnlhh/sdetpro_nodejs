export default class Animal {

    protected speed: number;
    protected name: string;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.speed = Math.floor(Math.random() * maxSpeed) + 1;
    }

    getSpeed(): number {
        return this.speed;
    }

    getName(): string {
        return this.name;
    }

}

import { dish } from "./Dish";

export class menu {
    constructor(
        public id: number,
        public restaurantId: number,
        public name: string,
        public photoUrl: string,
        public dishes: dish[] | null
    ) {}
    
}
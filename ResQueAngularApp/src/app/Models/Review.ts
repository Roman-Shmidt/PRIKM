export class review {
    constructor(
        public id: number,
        public clientId: number,
        public restaurantId: number,
        public rating: number,
        public description: string) { }
}
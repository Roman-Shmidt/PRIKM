export class queue {
    constructor(
        public id: number,
        public estimatedTime: Date,
        public clientId: number,
        public restaurantId: number,
        public companySize: number,
        public placeInQueue: number,
    ) {}
}
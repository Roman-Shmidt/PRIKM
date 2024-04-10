export class booking {
    constructor(
        public id: number,
        public dateAndTime: Date,
        public clientId: number,
        public restaurantId: number,
        public companySize: number,
        public name: string,
        public description: string,
        public isReservationApproved: boolean,
        public isReservationCompleted: boolean
    ) {}
}
export class restaurant {
    constructor(
        public id: number,
        public isQueueOpen: boolean,
        public isReservationOpen: boolean,
        public about: string,
        public telephone: string,
        public name: string,
        public address: string,
        public rating: number,
        public openingTime: Date,
        public closingTime: Date,
        public image: string,
        public longitude: number,
        public latitude: number
    ) {}
}